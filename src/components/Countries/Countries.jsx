import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries , setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    function handleVisitedCountry(country){
        console.log('Country was Visited')
        const newVisitedCountry = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountry);
    }

    return (
        <div className="fullbox">
            <h2>Countries : {countries.length}</h2>
            <div>
                <h3>Visited Country : {visitedCountries.length}</h3>
                <ul className="visitedCount">
                    {
                        visitedCountries.map(country => <li key={country}>
                            {country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3}
                        handleVisitedCountry = {handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;