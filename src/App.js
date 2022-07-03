import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function App() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);

    axios
      .get("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=S&port=IDJKT-T009D")
      .then((response) => {
        setdata(response.data);
        setisLoading(false);
      })
      .catch((err) => {
        
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading data</h1>;
  else if (data && !isError)
    return (
      <Fragment>
        <div className="app" style={{ marginLeft: "5em" }}>
          {data &&
            data.map((item) => (
              <div>
                <hr />
                <h1>{item.vessel_id.toUpperCase()}</h1>
                <i>{item.vessel_name}</i>
                <h2>{item.voyage}</h2>
                <hr />
              </div>
            ))}
        </div>
      </Fragment>
    );
  else {
    return <h1>Something Went Wrong</h1>;
  }
}