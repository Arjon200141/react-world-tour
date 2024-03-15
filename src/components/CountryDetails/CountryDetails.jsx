import CountryData from "../CountryData/CountryData";

const CountryDetails = ({country , handleVisitedCountry}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr/>
            <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;