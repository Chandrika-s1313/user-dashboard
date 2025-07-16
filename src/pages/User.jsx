import { useParams } from "react-router-dom"
import React from "react";

function User() {
    const { id, name } = useParams();
    return (
        <div className="container mt-4">
            <h2>User Detail Page</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {name}</p>
        </div>
    );
}

export default User;