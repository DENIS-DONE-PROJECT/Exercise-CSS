import React from "react";

const Profile = () => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/profile")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Erreur de api backend");
                }
            })
            .then((data) => setData(data))
            .catch((error) =>
                console.error(
                    "Erreur lors de la reuperation des données",
                    error
                )
            );
    }, []);

    return (
        <div className="profile">
            <h1>{!data ? "No exist" : data.fullname}</h1>
            <h2>{!data ? "No exist" : data.title}</h2>
        </div>
    );
};

export default Profile;
