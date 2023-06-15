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
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Erreur de api backend");
                }
            })
            .then((data) => setData(data.message))
            .catch((error) =>
                console.error(
                    "Erreur lors de la recuperation des données",
                    error
                )
            );
    }, []);
    return (
        <div>
            <div className="main">
                <Picture />
                <Profile />
                <div className="left">
                    <Identity />
                    <Hardskill />
                    <Language />
                    <Softskill />
                </div>
                <Experience />
                <Education />
            </div>
        </div>
    );
}

export default App;
