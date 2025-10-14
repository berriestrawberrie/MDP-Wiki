import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

export default function Menu() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Sidebar Menu</h2>
      <nav className="space-y-2">
        <button
          onClick={() => toggleDropdown("dashboard")}
          className="w-full flex gap-2 justify-between items-center text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Dashboard <FaCaretDown />
        </button>
        {openDropdown === "dashboard" && (
          <div className="ml-4 space-y-1">
            <a href="#" className="block px-4 py-1 hover:bg-gray-700 rounded">
              Overview
            </a>
            <a href="#" className="block px-4 py-1 hover:bg-gray-700 rounded">
              Stats
            </a>
          </div>
        )}

        <button
          onClick={() => toggleDropdown("projects")}
          className="w-full flex gap-2 items-center justify-between text-left px-4 py-2 rounded hover:bg-gray-700"
        >
          Projects <FaCaretDown />
        </button>
        {openDropdown === "projects" && (
          <div className="ml-4 space-y-1">
            <a href="#" className="block px-4 py-1 hover:bg-gray-700 rounded">
              Active
            </a>
            <a href="#" className="block px-4 py-1 hover:bg-gray-700 rounded">
              Archived
            </a>
          </div>
        )}

        <a
          href="#"
          className="px-4 flex justify-start py-2 rounded hover:bg-gray-700"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
}
