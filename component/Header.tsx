import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6 shadow-md fixed top-0 w-full">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            <a href="#">OmniStack</a>
          </h1>
          <ul className="flex">
            <li>
              <a className="hover:text-yellow-400 mr-4" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-400 mr-4" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-400 mr-4" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
