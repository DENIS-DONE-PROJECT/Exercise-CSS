import React from "react";
import "./App.css";
import avatar from "./assets/img/denis.jfif";

function App() {
    return (
        <div className="App">
            <h1>My resume</h1>

            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default App;
