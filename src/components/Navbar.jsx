import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <nav style={{ marginBottom: "20px" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Dashboard</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/user/101/alex">User</Link>

            {isLoggedIn && (
                <button
                    className="btn btn-outline-danger ms-2"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            )}

        </nav>
    );
}

export default Navbar;