import "./Content.css"
import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";



const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />            
            <Route path="/param/:id" element={<Param />} />  {/* Uso de : indica que é uma variável */}
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/* O '*' indica que qq url não tratada acima, cai neste caso */}
        </Routes>
    </main>
)

export default Content