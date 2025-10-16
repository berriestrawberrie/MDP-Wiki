import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

export default function Menu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMenu, setOpenMenu] = useState(false); // default to closed
  const navigate = useNavigate(); // ← Initialize navigate

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  //CONTROL THE MENU BAR TRANSITION
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Menu Toggle Button */}
      <div
        className={`fixed top-0 left-0 z-50 p-1 w-full transition-colors duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <button
          onClick={toggleMenu}
          className={`text-3xl ${scrolled ? " text-sky-500" : "text-white"}`}
        >
          {openMenu ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {/* Slide-in Menu */}
      <aside
        className={`fixed text-xl top-0 left-0 h-screen w-64 bg-white text-sky-500 p-4 transform transition-transform duration-300 ease-in-out z-40 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="mt-14 space-y-2">
          <button
            onClick={() => toggleDropdown("avatars")}
            className="w-full font-bold flex gap-2 justify-between items-center text-left px-4 py-2 rounded hover:bg-sky-100"
          >
            Players <FaCaretDown />
          </button>
          {openDropdown === "avatars" && (
            <div className="ml-4 space-y-1">
              <Link
                to="/allponies"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Playable Races
              </Link>
              <Link
                to="/ponyDesign"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Player Skills
              </Link>
            </div>
          )}
          <button
            onClick={() => toggleDropdown("dashboard")}
            className="w-full font-bold flex gap-2 justify-between items-center text-left px-4 py-2 rounded hover:bg-sky-100"
          >
            Ponies <FaCaretDown />
          </button>
          {openDropdown === "dashboard" && (
            <div className="ml-4 space-y-1">
              <Link
                to="/allponies"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Pony Types
              </Link>
              <Link
                to="/ponyDesign"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Design
              </Link>
              <Link
                to="/ponyCustom"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Customizing
              </Link>
              <Link
                to="/glimmerpane"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Glimmerpane
              </Link>
            </div>
          )}

          <Link
            to="/breeding"
            className="w-full  font-bold  flex gap-2 items-center justify-between text-left px-4 py-2 rounded hover:bg-sky-100"
          >
            Breeding
          </Link>
          <Link
            to=""
            className="w-full text-gray-200  font-bold  flex gap-2 items-center justify-between text-left px-4 py-2 rounded hover:bg-sky-100"
          >
            Socializing
          </Link>
          <Link
            to="/about"
            className="w-full  font-bold  flex gap-2 items-center justify-between text-left px-4 py-2 rounded hover:bg-sky-100"
          >
            About Me
          </Link>
        </nav>
      </aside>
    </>
  );
}
