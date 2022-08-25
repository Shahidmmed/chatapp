import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const style = {
  nav: `dark:bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
  button: `px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg`,
};

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, []);

  return (
    <div className={style.nav}>
      <h3></h3>
      <h1 className={style.heading}>Chat App</h1>
      <button className={style.button} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
