import { useState } from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useGetAllCountriesQuery } from "../redux/services/restCountriesCore";
import CountryCard from "../components/CountryCard";
import { regions } from "../constants/constants";
import Loader from "../components/Loader";

const Home = () => {
  const [region, setRegion] = useState("");

  const {
    data: countriesData,
    isFetching: fetchingCountriesData,
    error: countriesError,
  } = useGetAllCountriesQuery();

  if (fetchingCountriesData) {
    return <Loader />;
  }

  return (
    <section className="w-full h-full flex flex-col gap-10">
      <div className="w-full flex justify-between items-center bg-inherit">
        <div className="relative flex items-center flex-1">
          <MdSearch className="absolute top-1/2 -translate-y-1/2 left-6 cursor-pointer text-2xl text-gray-500" />
          <input
            type="text"
            placeholder="Search for a country"
            className="w-[40%] py-3 pl-16 shadow-md placeholder:text-gray-500 focus:border-none focus:outline-none rounded-lg bg-white"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-16 overflow-y-clip">
        {countriesData?.slice(0, 30).map((country) => (
          <Link to={`/${country.name.common}`}>
            <CountryCard country={country} key={country.name.common} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
