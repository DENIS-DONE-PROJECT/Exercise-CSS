import React from "react";
const Experience = () => {
    return (
        <div className="experience">
            <h1>Expérience professionnelle</h1>
            <ul>
                <li>
                    <span className="date">2020 - 2022 </span>
                    <span className="company">DONE PROJECT </span>
                    Marketing digital
                    <span className="location">Douai</span>
                    <br></br>
                    <span className="job">
                        Marketing digital - Création société
                    </span>
                </li>
                <li>
                    <span className="date">2011 - 2016 </span>
                    <span className="company">Mines de Douai </span>
                    Incubateur Technologique
                    <span className="location">Douai</span>
                    <br></br>
                    <span className="job">
                        Suivi de formations - aide ponctuelle aux étudiants
                    </span>
                </li>
                <li>
                    <span className="date">2007 </span>
                    <span className="company">Groupe Muller </span>
                    Matériel de chauffage électrique
                    <span className="location">France</span>
                    <br></br>
                    <span className="job">Direction de site</span>
                </li>
                <li>
                    <span className="date">2005 - 2006 </span>
                    <span className="company">Consultant </span>
                    Projet de reprise de société
                    <span className="location"></span>
                    <br></br>
                    {/* <span className="job">Direction industrielle</span> */}
                </li>
                <li>
                    <span className="date">1994 - 2004 </span>
                    <span className="company">SADTEM </span>
                    Matériel électrique moyenne tension
                    <span className="location">Douai</span>
                    <br></br>
                    <span className="job">Direction industrielle</span>
                </li>
                <li>
                    <span className="date">1992 - 1994 </span>
                    <span className="company">MWB </span>
                    Matériel électrique moyenne tension
                    <span className="location">Allemagne</span>
                    <br></br>
                    <span className="job">Coordination inter usines</span>
                </li>
                <li>
                    <span className="date">1988 - 1991 </span>
                    <span className="company">SATELEC </span>
                    Matériel médical et chirurgical
                    <span className="location">Bordeaux</span>
                    <br></br>
                    <span className="job">Ingénieur Bureau d'études</span>
                </li>

                {/*  <li>
                    <span className="date">1988 - 1991 </span>
                    Ingénieur Bureau d'études
                    <span className="location">Bordeaux</span>
                    <p>
                        <span className="company">SATELEC </span>
                        Matériel médical et chirurgical
                        <span className="location">Bordeaux</span>
                        <br></br>- Test de texte
                    </p>
                </li> */}
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
