import { Route, Routes } from "react-router-dom";
import About from "./about";
import Home from "./home";

export default function Content() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}