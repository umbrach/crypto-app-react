import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

function NavBar() {
  const [nav, setNav] = useState(false);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate()


    const handleSignOut = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (e) {
        console.log(e.message);
      }
    };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="rounded-div flex items-center justify-between h-[80px] font-bold">
      <Link to="/">
        <h1 className="text-2xl">CryptoBase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {user?.email ? (<div>
        <Link to='/account' className="p-4">Account</Link>
        <button onClick={handleSignOut}>Sign Out</button>
    </div> ) : (      <div className="hidden md:block">
        <Link to="/signin" className="p-4 hover:text-accent">
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
        >
          Sign Up
        </Link>
      </div>)}


      {/* Menu icon */}
      <div className="block md:hidden cursor-pointer z-10" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* Mobal menu */}

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b py-6">
            <Link to="/">Account</Link>
          </li>
          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button className="w-full my-2 p-4 bg-primary text-primary border border-secondary rounded-2xl shadow-xl">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 p-4 bg-button text-btnText border rounded-2xl shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
