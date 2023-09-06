// // import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import {Navbar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import {About} from './pages/about/about.jsx';
import Login from './pages/Login/Login.jsx';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">
 <ShopContextProvider>
      <Router>
        <Navbar/>
        
        <Routes>
        
          <Route path="/" element ={<Shop />} />         
          <Route path="/cart" element ={<Cart />}  />
          <Route path= "/about" element ={<About />} />
          <Route path= "/Login" element ={<Login/>} />
          
          </Routes>
     </Router>
</ShopContextProvider>
</div>
  )
}

     
export default App;

// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { navbar } from "./components/navbar";
// import {Shop} from './pages/shop/shop';
// import {Cart} from './pages/cart/Cart';
// import { ShopContextProvider } from './context/ShopContext';
// function App() {
//   return (
//     <div className="app">
//       <ShopContextProvider>
//         <Router>
//           <navbar />
//           <Routes>
//             <Route path="/Shop" element={<shop />}></Route>
//             <Route path="/Cart" element={<cart />}></Route>
//           </Routes>
//         </Router>
//       </ShopContextProvider>
//     </div>
//   );
// }

// export default App;