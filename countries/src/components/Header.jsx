import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full h-[70px] px-10 py-5 flex items-center shadow-lg bg-white sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <div className="flex justify-between items-center gap-2">
          <MdOutlineDarkMode />
          <h3 className="text-base font-semibold">Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
