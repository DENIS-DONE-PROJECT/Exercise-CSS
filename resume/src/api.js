function api() {
    const getData = () => {
        return fetch("http://localhost:3001/profile", {
            type: "GET",
        }).then((res) => res.json());
    };

    return {
        getData,
    };
}

export default api();
