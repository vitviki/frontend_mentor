import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {
  useGetAllCountriesQuery,
  useGetSearchResultsQuery,
  useGetCountriesByRegionQuery,
} from "../redux/services/restCountriesCore";
import CountryCard from "../components/CountryCard";
import { regions } from "../constants/constants";
import Loader from "../components/Loader";

const Home = () => {
  const { mode } = useSelector((store) => store.mode);
  const [region, setRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  function updateRegion(value) {
    setIsDropDownOpen(false);
    setRegion(value);
    setSearchTerm("");
  }

  // Get all countries data
  const {
    data: countriesData,
    isFetching: fetchingCountriesData,
    error: countriesError,
  } = useGetAllCountriesQuery();

  // Search for a country by name
  const {
    data: searchResult,
    isFetching: fetchingSearchResults,
    error: searchError,
  } = useGetSearchResultsQuery(searchTerm);

  // Get all countries by region
  const { data: regionResult, isFetching: fetchingRegionResult } =
    useGetCountriesByRegionQuery(region);

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
      <div className="w-full flex sm:flex-row flex-col gap-4 md:gap-0 justify-between items-center bg-inherit">
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
            className={`lg:w-[582px] md:w-[350px] w-[250px] min-w-[30%] py-3 pl-16 shadow-md focus:border-none focus:outline-none rounded-lg ${
              mode === "light"
                ? "bg-white placeholder:text-gray-500 text-veryDarkBlueLightMode"
                : "bg-darkBlue placeholder:text-gray-300 text-white"
            }`}
          />
        </div>
        <div
          className={`relative w-[161px] py-3 px-3 ${
            mode === "light"
              ? "text-veryDarkBlueLightMode bg-white"
              : "text-white bg-darkBlue"
          }  rounded-lg shadow-md`}
        >
          <button
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className="w-full flex items-center justify-around"
          >
            {region === ""
              ? "Filter by region"
              : region.charAt(0).toUpperCase() + region.slice(1)}
            {isDropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </button>
          {isDropdownOpen && (
            <div
              className={`w-full absolute ${
                mode === "light"
                  ? "bg-white text-veryDarkBlueLightMode"
                  : "bg-darkBlue text-white"
              }  top-14 left-0 p-2 rounded-lg shadow-md`}
            >
              {regions.map((r) => (
                <div
                  className={`w-full cursor-pointer py-1 pl-1 ${
                    mode === "light"
                      ? "hover:bg-veryLightGray"
                      : "hover:bg-veryDarkBlueDarkMode"
                  } `}
                  key={r.value}
                  onClick={() => updateRegion(r.value)}
                >
                  {r.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {searchResult !== undefined && searchTerm.length > 0 ? (
        <div className="w-full grid 2xl:grid-cols-6 2xl:gap-12 xl:grid-cols-5 xl:gap-10 lg:grid-cols-4 lg:gap-10 md:grid-cols-3 md:gap-8 sm:grid-cols-2 sm:gap-6 grid-cols-1 gap-5">
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
      ) : regionResult !== undefined ? (
        <div className="w-full grid 2xl:grid-cols-6 2xl:gap-12 xl:grid-cols-5 xl:gap-10 lg:grid-cols-4 lg:gap-10 md:grid-cols-3 md:gap-8 sm:grid-cols-2 sm:gap-6 grid-cols-1 gap-5">
          {regionResult?.map((country, idx) => (
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
        <div className="w-full grid 2xl:grid-cols-6 2xl:gap-12 xl:grid-cols-5 xl:gap-10 lg:grid-cols-4 lg:gap-10 md:grid-cols-3 md:gap-8 sm:grid-cols-2 sm:gap-6 grid-cols-1 gap-5">
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
