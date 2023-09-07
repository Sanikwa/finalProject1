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
// import { useState } from 'react'
// import { useLogin } from '../../hooks/useLogin'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//  const {login, error, isLoading} = useLogin()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     await login(email, password)
//   }

//   return (
//     <form className="Login" onSubmit={handleSubmit}>
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
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your server with email and password
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Handle successful login, e.g., redirect to a dashboard page
    } else {
      // Handle login failure, e.g., show an error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
