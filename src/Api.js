import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function App() {
    const [data, setdata] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        setisLoading(true);
        // URL Ganti dengan alamat github atau API kamu atau URL API MU
        // Method @{get, post, put, patch, delete}
        axios
            .get("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=S&port=IDJKT-T009D")
            .then((response) => {
                setdata(response.data);
                setisLoading(false);
            })
            .catch((err) => {
                // Jika Gagal
                setisError(true);
                setisLoading(false);
            });
    }, []);

    if (isLoading) return <h1>Loading data</h1>;
    else if (data && !isError)
        return (
            <Fragment>
                <div className="app" style={{ marginLeft: "5em" }}>
                    <h1>Get API</h1>
                    {/* <img
                        src={data.avatar_url}
                        alt="img"
                        width="256"
                        style={{ marginTop: "2em", borderRadius: 128 }}
                    /> */}
                    <hr />
                    <h2>Id: {data.vessel_id}</h2>
                    <h2>Name: {data.vessel_name}</h2>
                    <h2>
                        Kade : {data.voyage}
                    </h2>
                    {/* <h2>Join Github : {new Date(data.open_stack).getFullYear()}</h2>
                    <h2>Bio: {data.bio}</h2>
                    <h2>Location: {data.location}</h2> */}
                </div>
            </Fragment>
        );
    else {
        return <h1>Something Went Wrong</h1>;
    }
}