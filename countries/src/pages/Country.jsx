import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useGetSearchResultsQuery } from "../redux/services/restCountriesCore";
import Loader from "../components/Loader";
import Button from "../components/Button";
import { countryCodes } from "../constants/constants";

const Country = () => {
  const { mode } = useSelector((store) => store.mode);
  const { country } = useParams();

  const {
    data: countryData,
    isFetching,
    error,
  } = useGetSearchResultsQuery(country);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full mt-10 flex flex-col justify-start gap-10">
      <Helmet>
        <title>{country}</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={countryData[0]?.flags.svg}
        />
      </Helmet>
      <Button icon={<MdOutlineKeyboardBackspace />} text={"Back"} to={"/"} />
      <div className="w-full flex items-center gap-28">
        <div className="">
          <img
            src={countryData[0]?.flags.svg}
            alt={countryData[0]?.flags.alt}
            className="w-[640px] h-[480px] object-fit"
          />
        </div>
        <div
          className={`flex flex-col gap-7 w-[50%] ${
            mode === "light" ? " text-veryDarkBlueLightMode" : "text-white"
          }`}
        >
          <h1 className="text-2xl font-bold">{countryData[0]?.name.common}</h1>
          <div className="grid grid-cols-2 gap-y-2 mb-10">
            <p>
              <span className="font-semibold">Native Name: </span>
              {Object.values(countryData[0]?.name.nativeName)[0].common}
            </p>
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {countryData[0]?.tld[0]}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {countryData[0]?.population}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {
                countryData[0]?.currencies[
                  Object.keys(countryData[0]?.currencies)[0]
                ].name
              }
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {countryData[0]?.region}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {Object.values(countryData[0]?.languages).join(", ")}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>{" "}
              {countryData[0]?.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>{" "}
              {countryData[0]?.capital[0]}
            </p>
          </div>
          <div className=" flex items-center gap-3">
            <p className="font-semibold">Border countries:</p>
            {countryData[0].borders && (
              <div className="flex gap-2">
                {countryData[0].borders.map((country) => (
                  <Button text={countryCodes[country]} to={"/"} key={country} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
