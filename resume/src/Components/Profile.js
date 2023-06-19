import React, { useState, useEffect } from "react";
import api from "../api";

const Profile = () => {
    const [data, setDatas] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&
            api.getData().then((json) => {
                setDatas(json);
                setIsMounted(true);
            });
    }, [isMounted]);

    return (
        <div className="profile">
            <h1>{!data ? "Nom Prénom à renseigner" : data.fullname}</h1>
            <h2>{!data ? "Title à renseigner " : data.title}</h2>
        </div>
    );
};

export default Profile;
