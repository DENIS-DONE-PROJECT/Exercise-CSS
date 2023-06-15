import React from "react";

const Education = () => {
    return (
        <div className="education">
            <h1>Formation</h1>
            <ul>
                <li>
                    <span className="date">2023 </span>
                    Développeur Web Apllication Mobile : en cours de formation
                    <span className="location">Sofip Douai</span>
                </li>
                <li>
                    <span className="date">1988 - 1989 </span>DESS CAAE -
                    Administration des Entreprises
                    <span className="location">IAE Bordeaux</span>
                </li>
                <li>
                    <span className="date">1985 - 1988 </span>
                    Ingénieur électromécanique
                    <span className="location">UTC Compiègne</span>
                </li>
                <li>
                    <span className="date">1983 - 1985 </span>
                    DUT Maintenance industrielle
                    <span className="location">IUT Valenciennes</span>
                </li>
            </ul>
        </div>
    );
};

export default Education;
