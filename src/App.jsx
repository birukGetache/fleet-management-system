import CarDashboard from './component/CarDashBoard';
import Login from './component/Login'
import SignUp from './component/SignUp'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Dashboard from './component/Dashboard';
const router = createBrowserRouter([
  {
    path: "/Login",
    element: (
      <div className="main">
  <div className='contain'>
     <Login></Login>
    </div>
      </div>
  
     
    ),
  },
  {
    path: "/Dashboard",
    element: (
     <Dashboard></Dashboard>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <div className="main">
 <div  className='contain'>
     <SignUp></SignUp>
      </div>
      </div>
     
   
    ),
  },
  {
    path: "/CarDashBoard",
    element: (
  <CarDashboard></CarDashboard>
     
   
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
