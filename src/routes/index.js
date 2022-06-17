import { BrowserRouter,Routes,Route,} from "react-router-dom";

  import Home from '../pages/Home/index';
  import About from "../pages/About";
  import SideBar from '../layouts/SideBar'

export default function Rotas() {
    return(
    <BrowserRouter>
        <SideBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
            </Routes>
        </SideBar>
      </BrowserRouter>
    )
}
