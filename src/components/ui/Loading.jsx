import React from 'react'

const Loading = ({ message = 'Cargando...' }) => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="text-center">
      <div className="inline-flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
      <p className="mt-4 text-muted-foreground">{message}</p>
    </div>
  </div>
)

export default Loading
