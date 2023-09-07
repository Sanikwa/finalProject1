// import { useState } from "react"
// import { useLogin } from "../hooks/useLogin"

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const {login, error, isLoading} = useLogin()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     await login(email, password)
//   }

//   return (
//     <form className="login" onSubmit={handleSubmit}>
//       <h3>Log In</h3>
      
//       <label>Email address:</label>
//       <input 
//         type="email" 
//         onChange={(e) => setEmail(e.target.value)} 
//         value={email} 
//       />
//       <label>Password:</label>
//       <input 
//         type="password" 
//         onChange={(e) => setPassword(e.target.value)} 
//         value={password} 
//       />

//       <button disabled={isLoading}>Log in</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

// export default Login
// New.jsx
// const React = require('react');
// class Login extends React.Component {
//     render () {
//         return(
//         <div>
//             <h1>Kingdom Sign In </h1>
//             <form action="/fruits" method="POST">
//                 Name: <input type="text" name="name" /><br />
//                 Email: <input type="text" name="color" /><br/>
//                 Do you have a login: <input type='checkbox' name="readyToEat" /><br/>
//                 <input type='submit' name="" value="Create Login" />
//             </form>
//         </div>
//     );
// }
// }
// module.exports = Login;