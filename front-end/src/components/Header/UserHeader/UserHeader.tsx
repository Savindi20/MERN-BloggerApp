import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

interface NavItem {
  title: string;
  link: string;
}

const NavItemsInfo = [
  {
    name: "Home",
    type: "dropdown",
    items: [
      {
        title: "Home",
        link: "/adminHome",
      },
    ],
  },
  {
    name: "Articles",
    type: "dropdown",
    items: [
      { title: "Articles", link: "/adminArticle" },
      { title: "Manage Articles", link: "/admin" },
    ],
  },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", link: "/adminAbout" },
      { title: "Contact us", link: "/adminContact" },
    ],
  },
];

interface HeaderProps {
  item: {
    name: string;
    type: string;
    items?: NavItem[];
  };
}

const NavItem: React.FC<HeaderProps> = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-purple-600 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <KeyboardArrowDownIcon />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items?.map((page, index) => (
                <a
                  key={index}
                  href={page.link}
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

function UserHeader() {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navigate = useNavigate();

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header
        className="container mt-4 mx-auto mb-14 px-5 flex justify-center py-4 items-center"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          borderRadius: "15px",
        }}
      >
        <div className="flex items-center">
          {" "}
          {/* Add flex and items-center classes */}
          {/* <img className="w-16" src="" alt="logo" /> */}
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <CloseIcon className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <MenuIcon className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full "
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold font-Ubuntu mx-auto">
            {NavItemsInfo.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          <button
            onClick={() => navigate("/")}
            className="mt-5 lg:mt-0 font-Ubuntu border-2 border-purple-600 px-6 py-2 rounded-full text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
          >
            Log Out
          </button>
        </div>
      </header>
    </section>
  );
}

export default UserHeader;