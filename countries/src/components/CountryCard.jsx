const CountryCard = ({ country }) => {
  return (
    <div className="w-[250px] h-[320px] flex flex-col bg-white shadow-lg">
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
            {country.population}
          </p>
          <p className=" text-sm">
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p className=" text-sm">
            <span className="font-semibold">Population: </span>
            {country.capital[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
