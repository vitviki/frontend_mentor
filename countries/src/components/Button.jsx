import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Button = ({ icon, text, to }) => {
  const { mode } = useSelector((store) => store.mode);
  return (
    <div>
      <Link
        to={to}
        className={`w-[120px] flex items-center justify-around py-2 px-5 shadow-lg ${
          mode === "light"
            ? "bg-white text-veryDarkBlueLightMode"
            : "bg-darkBlue text-white"
        } rounded-lg`}
      >
        {icon}
        {text}
      </Link>
    </div>
  );
};

export default Button;
