import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
const App = () => {
  const[isDark , setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <>
      <Header theme={[isDark , setIsDark]} />
       <Outlet context={[isDark , setIsDark]}/>{/*this is cotext api this is use to avoid prop drilling.*/}
    </>//prop drilling is nothing basically it is passing prop from grandparent to grandson
  );
};
export default App;
