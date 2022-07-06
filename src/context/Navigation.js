import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Works } from "./Works/Works"
import { Review } from "./Review/Review"
import { Register } from "./Register/Register"
import { Login } from "./Login/Login"
import { ListDocs } from "./listDocs/ListDocs"
import { Home } from "./Home/Home"



const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/review" element={<Review />}>
                </Route>
                <Route path="/works" element={<Works />}>
                </Route>
                <Route path="/register" element={<Register />}>
                </Route>
                <Route path="/login" element={<Login />}>
                </Route>
                <Route path="/list-docs" element={<ListDocs />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation;