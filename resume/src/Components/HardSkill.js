import React from "react";
import logoreact from "../assets/icon/icons8-react-native-96.png";

const Hardskill = () => {
    return (
        <div className="hardskill">
            <h1 className="inProgress">Compétences</h1>
            <span>En cours d'acquisition</span>
            <br></br>

            <div className="logoLine">
                <img className="logoSkill" src={logoreact} alt="logo React" />
                <img className="logoSkill" src={logoreact} alt="logo React" />
                <img className="logoSkill" src={logoreact} alt="logo React" />
                <img className="logoSkill" src={logoreact} alt="logo React" />
                <img className="logoSkill" src={logoreact} alt="logo React" />
            </div>

            <div className="logoText">
                <span className="logoSkill">HTML</span>
                <span className="logoSkill">CSS</span>
                <span className="logoSkill">JS</span>
                <span className="logoSkill">React</span>
                <span className="logoSkill">Git</span>
            </div>
        </div>
    );
};

export default Hardskill;
