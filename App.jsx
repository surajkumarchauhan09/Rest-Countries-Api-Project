import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import { useState } from "react";
// import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDarkMode"))
  // );
  
  // return (
  //   <ThemeContext.Provider value={[isDark, setIsDark]}>
  //     <Header />
  //     <Outlet />
  //     {/*this is cotext api this is use to avoid prop drilling.*/}
  //   </ThemeContext.Provider> //prop drilling is nothing basically it is passing prop from grandparent to grandson
  // );

  return (
    // <ThemeContext.Provider value={[isDark, setIsDark]}>
      <ThemeProvider>
        <Header />
        <Outlet />
        {/*this is cotext api this is use to avoid prop drilling.*/}
      </ThemeProvider>
    // </ThemeContext.Provider>
  );
};
export default App;
