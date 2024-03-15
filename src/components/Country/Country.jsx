import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country , handleVisitedCountry}) => {
    
    const {name , flags , capital , region , area ,population ,timezones , cca3} = country
    
    const [visited,setVisited] = useState(false);

    function handleVisited(){
        setVisited(!visited);
    }

    const passWithPara = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <h3>Name : {name.common}</h3>
            <h3>Official Name : {name.official}</h3>
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            <p>Timezone : {timezones}</p>
            <p>Code : {cca3}</p>
            <button onClick={passWithPara}>Mark as Visited</button><br/><br />
            <button onClick={handleVisited}> Visit </button>
            {visited ? '   I have visited the country..' : '   Want to visit here'}
            <hr/>
            <CountryDetails country={country} handleVisitedCountry={handleVisitedCountry}></CountryDetails>
        </div>
    );
};

export default Country;