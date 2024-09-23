import { useEffect, useState } from "react";

// export function getWindowSize() {//this is not a hook
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     });
//   }, []);

//   return windowSize;
// }
export function useWindowSize() {//this is hoot hook.Basically hook is a function starting with use
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      });
    }, []);
  
    return windowSize;
  }