import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name , flags , capital , region , area ,population ,timezones , cca3} = country
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h3>Name : {name.common}</h3>
            <h3>Official Name : {name.official}</h3>
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            <p>Timezone : {timezones}</p>
            <p>Code : {cca3}</p>
        </div>
    );
};

export default Country;