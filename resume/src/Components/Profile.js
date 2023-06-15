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
            <h1>{!data ? "No exist" : data.fullname}</h1>
            <h2>{!data ? "No exist" : data.title}</h2>
        </div>
    );
};

export default Profile;
