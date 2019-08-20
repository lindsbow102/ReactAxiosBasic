import React from "react";
import "./style.css";

const Home = () => {
    return (
        <div>
        <h1>Welcome to the React Axios Page</h1>
        <button><a href="/concerts">See upcoming concerts</a></button>
        <br></br>
        <button><a href="/movies">Search movies</a></button>
        </div>
    )
}

export default Home;