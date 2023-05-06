import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NavBar from "../components/NavBar";
import CustomersPage from "../pages/CustomersPage";
import Products from "../pages/Products";
import CustomerPage from "../pages/CustomerPage";

const AppRouter = () => {
    return (
        <>
            <Router>
                <NavBar />
                <div className="container">
                <Routes>
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/customers" element={<CustomersPage/>} />
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/customers/:id" element={<CustomerPage/>} />

                    <Route path="/*" element={<Navigate to="/home"/>} />
                </Routes>
                </div>
            </Router>
        </>
    )
}

export default AppRouter