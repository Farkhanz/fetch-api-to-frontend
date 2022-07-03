import './App.css';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

function App() {
  const [data, setData] = useState([])

  const getInfo = async() => {
    const info = await fetch("https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=S&port=IDJKT-T009D")
    const value = await info.json()
    const result = value.data.map(data => {
      return {
        label: data.vessel_name,
        value: data.vessel_name
      }
    })
    setData(result.sort((a,b) => a.label.localeCompare(b.label)))
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div className="App">
      <Select options={data}></Select>
    </div>
  );
}

export default App;
