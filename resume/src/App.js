import React from "react";
import "./App.css";

function App() {
    return (
        <div className="container">
            <div className="gridLeft">
                <div className="picture">picture</div>
                <div className="identity">identity</div>
                <div className="hardkill">hardkills`</div>
                <div className="Language">Language</div>
                <div className="softskill">softskill</div>
            </div>
            <div className="gridRight">
                <div className="profile">profile</div>
                <div className="gridExperience">
                    experience
                    <div className="childExperience1">Exp1</div>
                    <div className="childExperience2">Exp2</div>
                    <div className="childExperience3">Exp3</div>
                </div>

                <div className="gridTraining">
                    Training
                    <div className="childTaining1">Training 1</div>
                    <div className="childTaining2">Training 2</div>
                    <div className="childTaining3">Training 3</div>
                </div>
            </div>
        </div>
    );
}

export default App;
