import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";

const App = () => {
  return (
    <div className=" bg-veryLightGray">
      <Header />
      <div className="w-full px-10 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
