import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />

                    <Route path="/*" element={<Navigate to="/home"/>} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter