import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";

const App = () => {
  const { mode } = useSelector((store) => store.mode);
  return (
    <div
      className={`${
        mode === "light" ? "bg-veryLightGray" : " bg-veryDarkBlueDarkMode"
      }`}
    >
      <Header />
      <div className="w-full h-full px-16 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
