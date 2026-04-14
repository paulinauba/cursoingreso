import { db } from '../config/firebase'
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'

/**
 * Verifica si un usuario está en la whitelist de administradores
 * @param {string} email - Email del usuario
 * @returns {Promise<Object|null>} Datos del admin si existe, null si no
 */
export const checkAdminWhitelist = async (email) => {
  try {
    const adminsRef = collection(db, 'admins')
    const q = query(adminsRef, where('email', '==', email))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return {
        id: doc.id,
        ...doc.data()
      }
    }
    return null
  } catch (error) {
    console.error('Error verificando whitelist:', error)
    throw error
  }
}

/**
 * Obtiene el rol del usuario (Admin o Secretaría)
 * @param {string} email - Email del usuario
 * @returns {Promise<string>} Rol del usuario: 'admin', 'secretary', o null
 */
export const getUserRole = async (email) => {
  const adminData = await checkAdminWhitelist(email)
  if (adminData) {
    return adminData.role || 'admin'
  }
  return null
}
