import './App.css';
import Inscription from './login_signup/inscription';
import Login from './login_signup/login';
import Home from './login_signup/home';
import Navbar from './login_signup/navbar';
import './login_signup/style.scss';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
const route= createBrowserRouter([
  {
    path:"/Login", element:<Login/>
  },
  {
    path:"/Inscription", element:<Inscription/>
  },
  {
    path:"/Home",element:<Home/>
  },
  {
    path:"/Navbar",element:<Navbar/>
  }
])

function App (){
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
