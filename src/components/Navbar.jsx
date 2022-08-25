import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

const style = {
  nav: `dark:bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
  welcome: `text-white `,
  button: `px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg`,
};

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={style.nav}>
      <h3 className={style.welcome}>
        Welcome {user?.displayName || user?.email}
      </h3>
      <h1 className={style.heading}>Chat App</h1>
      <button className={style.button} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
