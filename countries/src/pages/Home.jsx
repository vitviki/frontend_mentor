import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import {
  useGetAllCountriesQuery,
  useGetSearchResultsQuery,
} from "../redux/services/restCountriesCore";
import CountryCard from "../components/CountryCard";
import { regions } from "../constants/constants";
import Loader from "../components/Loader";

const Home = () => {
  const { mode } = useSelector((store) => store.mode);
  const [region, setRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: countriesData,
    isFetching: fetchingCountriesData,
    error: countriesError,
  } = useGetAllCountriesQuery();

  const {
    data: searchResult,
    isFetching: fetchingSearchResults,
    error: searchError,
  } = useGetSearchResultsQuery(searchTerm);

  if (fetchingCountriesData) {
    return <Loader />;
  }

  return (
    <section
      className={`w-full h-full flex flex-col gap-10 ${
        mode === "light" ? "text-veryDarkBlueLightMode" : "text-white"
      }`}
    >
      <Helmet>
        <title>Where in the world?</title>
        <link rel="icon" type="image/svg+xml" href="/globe.svg" />
      </Helmet>
      <div className="w-full flex justify-between items-center bg-inherit">
        <div className="relative flex items-center flex-1">
          <MdSearch
            className={`absolute top-1/2 -translate-y-1/2 left-6 cursor-pointer text-2xl ${
              mode === "light" ? "text-veryDarkBlueLightMode" : "text-white"
            } `}
          />
          <input
            type="text"
            placeholder="Search for a country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-[40%] py-3 pl-16 shadow-md focus:border-none focus:outline-none rounded-lg ${
              mode === "light"
                ? "bg-white placeholder:text-gray-500 text-veryDarkBlueLightMode"
                : "bg-darkBlue placeholder:text-gray-300 text-white"
            }`}
          />
        </div>
      </div>
      {searchResult !== undefined && searchTerm.length > 0 ? (
        <div className="w-full flex flex-wrap justify-between gap-12 overflow-y-clip">
          {searchResult?.map((country, idx) => (
            <Link
              to={`/${country.name.official}`}
              title={country.name.official}
              key={idx}
            >
              <CountryCard country={country} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-wrap justify-between gap-12 overflow-y-clip">
          {countriesData?.slice(0, 30).map((country, idx) => (
            <Link
              to={`/${country.name.official}`}
              title={country.name.official}
              key={idx}
            >
              <CountryCard country={country} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
