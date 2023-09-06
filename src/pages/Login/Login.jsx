// import React from 'react'
// export const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }
// // New.jsx
// import React from 'react';


// class New extends React.Component {
//     render () {
//         return(
//         <div>
//             <h1>Create Fruit Page</h1>
//             <form action="/fruits" method="POST">
//                 Name: <input type="text" name="name" /><br />
//                 Color: <input type="text" name="color" /><br/>
//                 Is Ready To Eat: <input type='checkbox' name="readyToEat" /><br/>
//                 <input type='submit' name="" value="Create Fruit" />
//             </form>
//         </div>
//     );
// }
// }
// module.exports = New;
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login 