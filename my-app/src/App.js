
import './App.css';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Nav from './components/navbar/Nav';
import User from './components/user/User';


import All from './components/all/All';
import {  createBrowserRouter, Outlet, RouterProvider  } from "react-router-dom";
import './App.css';
import Men from './components/men/Men';
import SearchBar from './components/search/SearchBar';
import Women from './components/women/Women';
import Category from './components/category/Category';


function App() {
  const Layout = () =>{
    return(
          <div >
             <Navbar/>
             <Nav/>
             
             
           
            
               

                
                <Outlet/>
               
        
     
    </div>
              
      )
    };
    
    const router = createBrowserRouter([
      {
        path: "/",
        element:<Layout/>,
        children:[
          {
          path:"/",
          element: <Home/>
        },
   
    ]
      },
    
   
    {
      path: '/active-shoes',
      element: <Contact/>
    },
    {
      path: '/user',
      element: <User/>
    },
    {
      path: '/category',
      element: <Category/>
    }, 
   
    {
      path: '/searchbar',
      element: <SearchBar/>
    }, 
   
    {
      path:"/men",
      element: <Men/>
    },
    {
      path:"/women",
      element: <Women/>
    },
   
    {
      path:"/all",
      element: <All/>
    },
    
  ])
  return (
    <div className="App">
        <div className="App">
      <RouterProvider router={router}/>
      
    </div>
    </div>
  );
}

export default App;
