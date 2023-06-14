import React from "react";
const Experience = () => {
    return (
        <div className="experience">
            <h1>Expérience professionnelle</h1>
            <ul>
                <li>
                    <span className="date">1988 - 1991 </span>
                    Ingénieur Bureau d'études
                    <br></br>
                    <p>
                        <span className="Company">SATELEC </span>
                        Matériel médical et chirurgical
                        <span className="location">Bordeaux</span>
                    </p>
                </li>
            </ul>

            {/*
            <section>
                2011 - 2016 Mines de Douai - Incubateur Technologique APUI
            </section>
            <section>2007 - Direction de site industriel</section> */}
        </div>
    );
};

export default Experience;
