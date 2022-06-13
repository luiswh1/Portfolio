import { BrowserRouter,Routes,Route,} from "react-router-dom";

  import Home from '../pages/Home/index';
  import SideBar from '../layouts/SideBar'

export default function Rotas() {
    return(
    <BrowserRouter>
        <SideBar>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </SideBar>
      </BrowserRouter>
    )
}
