import  { createContext } from 'react'

// const AuthContext = createContext() => {
//   return (
//     <div>
      
//     </div>
//   )
// }
const AuthContext = createContext({
    isLogin: false,
    onLogout: () => {},
    isDay: false,
    toggleDay: () => {}
}) 

export default AuthContext
