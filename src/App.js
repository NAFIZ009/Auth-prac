import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivetRouter from './PrivetRouter';
function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            path:'/register',
            element:<Register/>
          },
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/orders',
            element:<PrivetRouter><div>this is order</div></PrivetRouter>
          }
        ]
      }
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
