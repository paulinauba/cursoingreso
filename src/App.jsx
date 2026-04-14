import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from './config/firebase'
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard'
import Loading from './components/ui/Loading'
import { checkAdminWhitelist } from './utils/authUtils'

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCycle, setActiveCycle] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          const adminData = await checkAdminWhitelist(currentUser.email)
          if (adminData) {
            setUser({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
              role: adminData.role || 'admin',
              adminId: adminData.id
            })
            // Cargar el ciclo activo desde Firestore
            await loadActiveCycle()
          } else {
            await auth.signOut()
            setUser(null)
          }
        } else {
          setUser(null)
        }
      } catch (err) {
        console.error('Error en verificación de usuario:', err)
        setError('Error al verificar autenticación')
      } finally {
        setIsLoading(false)
      }
    })
    return unsubscribe
  }, [])

  const loadActiveCycle = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'cycles'))
      const active = snapshot.docs.find(d => d.data().status === 'active')
      if (active) {
        setActiveCycle(active.id)
      } else {
        // Si no hay ciclo activo, usar el más reciente como referencia
        const sorted = snapshot.docs.sort((a, b) => b.id.localeCompare(a.id))
        if (sorted.length > 0) setActiveCycle(sorted[0].id)
      }
    } catch (err) {
      console.error('Error al cargar ciclo activo:', err)
      // Fallback al año actual
      setActiveCycle(String(new Date().getFullYear()))
    }
  }

  if (isLoading) return <Loading message="Inicializando aplicación..." />

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Error</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {user ? (
        <Dashboard
          user={user}
          activeCycle={activeCycle}
          onCycleChange={setActiveCycle}
          onLogout={() => setUser(null)}
        />
      ) : (
        <Login onLoginSuccess={setUser} />
      )}
    </>
  )
}

export default App