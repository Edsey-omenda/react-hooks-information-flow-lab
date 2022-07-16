import React from "react";


function Header({isDarkMode,onDarkModeClick}){

return(
    <header className={isDarkMode ? "App dark" : "App light"}>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
)

}
export default Header;