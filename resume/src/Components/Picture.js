import React from "react";

const Picture = (props) => {
    return (
        <div className="picture">
            {/* <img src={props.elsrc} alt={props.elalt} /> */}
            {/* <img src="https://picsum.photos/1000/560" alt={props.elalt} /> */}

            {/* <span> {props.text}</span> */}
            <img src="./assets/img/denis.jfif" alt={props.elalt} />
        </div>
    );
};

export default Picture;
