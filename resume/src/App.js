import React from "react";
import "./App.css";
import Picture from "./Components/Picture";
import Profile from "./Components/Profile";
import Identity from "./Components/Identity";
import Language from "./Components/Language";
import Softskill from "./Components/SoftSkill";
import Hardskill from "./Components/HardSkill";
import Experience from "./Components/Experience";
import Education from "./Components/Education";

function App() {
    return (
        <div className="main">
            <Picture />
            <Profile />
            <div className="Left">
                <Identity />
                <Hardskill />
                <Language />
                <Softskill />
            </div>
            <Experience />
            <Education />
        </div>
    );
}

export default App;
