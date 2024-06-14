import CarDashboard from './component/CarDashBoard';
import Login from './component/Login'
import GpsTracker from './component/GpsTracker';
import SignUp from './component/SignUp'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Dashboard from './component/Dashboard';
import Card from './component/Card';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Dashboard></Dashboard>
  
     
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
    path: "/Card",
    element: (
      <div className="main">
 <div  className='contain'>
   <Card></Card>
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
