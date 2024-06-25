import { useSelector } from "react-redux";

const CountryCard = ({ country }) => {
  const { mode } = useSelector((store) => store.mode);
  return (
    <div
      className={`w-[250px] h-[320px] flex flex-col ${
        mode === "light"
          ? "bg-white text-veryDarkBlueLightMode"
          : "bg-darkBlue text-white"
      } shadow-lg rounded-md`}
    >
      <div className="img_container shadow-md w-full h-[50%]">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-full h-full rounded-t-md object-fit"
        />
      </div>
      <div className="flex flex-col gap-5 px-5 pt-5">
        <h2 className=" font-bold">{country.name.common}</h2>
        <div className="">
          <p className=" text-sm">
            <span className="font-semibold">Population: </span>
            {country.population === undefined ? "" : country.population}
          </p>
          <p className=" text-sm">
            <span className="font-semibold">Region: </span>
            {country.region === undefined ? "" : country.region}
          </p>
          <p className=" text-sm">
            <span className="font-semibold">Capital: </span>
            {country.capital === undefined ? "" : country.capital[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
