 import { MirarPelicula } from "./pages/MirarPelicula"
 import { LandingPage } from "./pages/LandingPage"
 import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
 import { Header } from "./pages/Header"
 import { Popular } from "./pages/home/Popular"




 export const App = ()  =>{

   return (
<BrowserRouter>

<header>
<Link to="/"><Header/></Link>


</header>
<Routes>
<Route path = "/" element = { <LandingPage/>} />
<Route path = "/pelicula/:pelicula-ver-peli" element = { <MirarPelicula/>}/>
<Route path="/*" element={<h1>Error</h1>}></Route>
<Route path = "/pelicula/popular" element = { <Popular/>}/>


</Routes>
</BrowserRouter>
)
 }



