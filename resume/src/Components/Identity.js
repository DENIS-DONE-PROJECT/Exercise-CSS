import React from "react";

const Identity = () => {
    return (
        <div className="identity">
            <h1>Contact</h1>

            <ul>
                <li className="identityRow">
                    <span className="material-symbols-outlined">home</span>
                    <span className="rightToLogo">
                        <div>
                            6 rue Surcouf
                            <br></br>
                            59553 Lauwin Planque
                        </div>
                    </span>
                </li>
                <li className="identityRow">
                    <span className="material-symbols-outlined">phone</span>
                    <span className="rightToLogo">06 85 77 04 80</span>
                </li>
                <li className="identityRow">
                    <span className="material-symbols-outlined">email</span>

                    <span className="rightToLogo">denisavocat@sfr.fr</span>
                </li>
            </ul>
        </div>
    );
};

export default Identity;
