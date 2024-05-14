 import { MirarPelicula } from "./pages/MirarPelicula"
 import { LandingPage } from "./pages/LandingPage"
 import {BrowserRouter,Routes,Route} from "react-router-dom"
 import { Header } from "./pages/Header"
 import { Popular } from "./pages/home/Popular"
 import { Top } from "./pages/home/Top"
import { Proximamente } from "./pages/home/Proximamente"
import { Error } from "./Components/Error"
import { MirarTrailer } from "./Components/MirarTrailer"
import { Show } from "./Components/Show"
import {Create} from "./Components/Create"
import { Edit } from "./Components/Edit"
import { HomeUsuario } from "./Components/HomeUsuario"
import { Login } from "./Components/Login"




    export const App = ()  =>{
      return (
         <BrowserRouter>
            <header>
               <Header/>
            </header>
            <Routes>
               <Route path = "/" element = { <LandingPage/>} />
               <Route path = "/pelicula/:pelicula-ver-peli" element = { <MirarPelicula/>}/>
               <Route path="/*" element={<Error/>}></Route>
               <Route path = "/pelicula/popular" element = { <Popular/>}/>
               <Route path = "/pelicula/top" element = { <Top/>}/>
               <Route path = "/pelicula/Upcoming" element = { <Proximamente/>}/>
               <Route path = "/trailer/pelicula" element = { <MirarTrailer/> }/>
               <Route path = "/Show" element = {<Show/>}/>
               <Route path = "/login" element = {<Login/>}/>
               <Route path = "/HomeUsuario" element = {<HomeUsuario/>}/>
               <Route path = "/create" element = {<Create/>}/>
               <Route path="/edit/:id" element = {<Edit/>}/>
              
               
            </Routes>
         </BrowserRouter>
      )
   }
   



 
