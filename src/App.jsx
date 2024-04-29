import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { MirarPelicula } from "./pages/MirarPelicula"
 import { LandingPage } from "./pages/LandingPage"
 import { DetallePeliculas } from "./pages/DetallePeliculas" 


 export const App = ()  =>{

   return (
<BrowserRouter>

<header>
 <Link to = "/">
 <h1 className="title">PELICULAS</h1>
 </Link>
</header>
<Routes>
<Route path = "/" element = { <LandingPage/>} />
<Route path = "/pelicula/:peliculaId" element = { <DetallePeliculas/>}/>
<Route path = "/pelicula/:pelicula-ver" element = { <MirarPelicula/>}/>
</Routes>
</BrowserRouter>
)
 }




