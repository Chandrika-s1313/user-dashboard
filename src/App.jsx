import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import PrivateRouter from "./components/PrivateRouter";
import Login from './pages/Login';
import Settings from './pages/Settings';



// ✅ This is where useLocation is allowed
function MainApp({ isLoggedIn, setIsLoggedIn }) {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <>
            {/* ✅ Show Navbar only when logged in and not on login page */}
            {isLoggedIn && !isLoginPage && (
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            )}

            <Routes>
                {/* Public Route */}
                <Route
                    path="/login"
                    element={
                        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    }
                />

                {/* Private Routes */}
                <Route
                    path="/"
                    element={
                        <PrivateRouter isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </PrivateRouter>
                    }
                />

                {/* Public route but optional to guard */}
                <Route path="/user/:id/:name" element={<User />} />

                <Route
                    path="/settings"
                    element={
                        <PrivateRouter isLoggedIn={isLoggedIn}>
                            <Settings />
                        </PrivateRouter>
                    }
                />


                {/* 404 fallback */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <MainApp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </BrowserRouter>
    );
}

export default App;
