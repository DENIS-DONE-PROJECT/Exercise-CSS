import React from "react";

const Identity = () => {
    return (
        <div className="identity">
            <h1>Contact</h1>

            <ul>
                <li>
                    {/* <ul className="pRightToLogo">
                        <li>
                            <span className="material-symbols-outlined">
                                home
                            </span>
                        </li>
                        <li>
                            <div className="rightToLogo">
                                6 rue Surcouf
                                <br></br>
                                59553 Lauwin Planque
                            </div>
                        </li>
                    </ul> */}

                    <span className="material-symbols-outlined">home</span>
                    <span className="rightToLogox">
                        <div className="rightToLogo">
                            6 rue Surcouf
                            <br></br>
                            59553 Lauwin Planque
                        </div>
                    </span>
                </li>
                <li>
                    <span className="material-symbols-outlined">phone</span>
                    <span className="rightToLogox">06 85 77 04 80</span>
                </li>
                <li>
                    <span className="material-symbols-outlined">email</span>

                    <span className="rightToLogox">denisavocat@sfr.fr</span>
                </li>
            </ul>
        </div>
    );
};

export default Identity;
