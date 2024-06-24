import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { flipMode } from "../redux/features/modeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((store) => store.mode);

  return (
    <header
      className={`w-full h-[70px] px-16 py-5 flex items-center shadow-lg ${
        mode === "light" ? "bg-white" : "bg-darkBlue"
      } sticky top-0 z-50`}
    >
      <div
        className={`w-full flex justify-between items-center ${
          mode === "light" ? " text-veryDarkBlueLightMode" : "text-white"
        }`}
      >
        <Link to="/">
          <h1 className="text-2xl font-bold">Where in the world?</h1>
        </Link>
        <div className="cursor-pointer" onClick={() => dispatch(flipMode())}>
          {mode === "light" ? (
            <div className="flex justify-between items-center gap-2">
              <MdOutlineDarkMode />
              <h3 className="text-base font-semibold">Dark Mode</h3>
            </div>
          ) : (
            <div className="flex justify-between items-center gap-2">
              <MdOutlineLightMode />
              <h3 className="text-base font-semibold">Light Mode</h3>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
