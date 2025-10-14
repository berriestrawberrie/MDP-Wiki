import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

  return (
    <>
      {/* Menu Toggle Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className={`text-5xl ${
            openMenu ? "text-sky-500 text-left" : "text-white"
          }`}
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
              <a
                href="#"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Stats
              </a>
            </div>
          )}

          <button
            onClick={() => toggleDropdown("projects")}
            className="w-full  font-bold  flex gap-2 items-center justify-between text-left px-4 py-2 rounded hover:bg-sky-100"
          >
            Projects <FaCaretDown />
          </button>
          {openDropdown === "projects" && (
            <div className="ml-4 space-y-1">
              <a
                href="#"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Active
              </a>
              <a
                href="#"
                className="block text-right px-4 py-1 hover:bg-sky-100 rounded"
              >
                Archived
              </a>
            </div>
          )}

          <a
            href="#"
            className="px-4 flex font-bold justify-start py-2 rounded hover:bg-sky-100"
          >
            Settings
          </a>
        </nav>
      </aside>
    </>
  );
}
