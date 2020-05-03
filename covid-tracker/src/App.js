import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    }
    fetchAPI();
  }, []);

  async function handleCountryChange(country) {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  }

  return (
    <div className="container">
      <h1>Covid tracker</h1>
      <img className="image" src={require('./images/covid.jpg')} alt=""/>
      <Cards className data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
