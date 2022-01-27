import React, { createContext, useState } from 'react'
import App from '../App'
 export const context = React.createContext<any>(null)
function ContextProvider() {
  const [objFocus, setObjFocus] = useState(1)
  const value = {
    objFocus,
    setObjFocus,
  }
  return (
    <context.Provider value={value}>
      <App />
    </context.Provider>
  )
}

export default ContextProvider
