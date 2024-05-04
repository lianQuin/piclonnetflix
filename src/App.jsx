 import { MirarPelicula } from "./pages/MirarPelicula"
 import { LandingPage } from "./pages/LandingPage"
 import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
 import { Header } from "./pages/Header"
 import { Popular } from "./pages/home/Popular"
 import { Top } from "./pages/home/Top"
import { Proximamente } from "./pages/home/Proximamente"
import { Error } from "./Components/Error"
import { MirarTrailer } from "./Components/MirarTrailer"




 export const App = ()  =>{

   return (
<BrowserRouter>

<header>
<Link to="/"><Header/></Link>


</header>
<Routes>
<Route path = "/" element = { <LandingPage/>} />
<Route path = "/pelicula/:pelicula-ver-peli" element = { <MirarPelicula/>}/>
<Route path="/*" element={<Error/>}></Route>
<Route path = "/pelicula/popular" element = { <Popular/>}/>
<Route path = "/pelicula/top" element = { <Top/>}/>
<Route path = "/pelicula/Upcoming" element = { <Proximamente/>}/>
<Route path = "/trailer/pelicula" element = { <MirarTrailer/> }/>

</Routes>
</BrowserRouter>
)
 }



