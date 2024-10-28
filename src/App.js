import Navbar from './components/Navbar.jsx'
import TextAnim from "./components/TextAnim";
import Projects from './components/Projects'
import {Element} from "react-scroll";
import {useEffect, useState} from "react";
import Footer from "./components/Footer";
export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

function App() {
  return (
    <Navbar>
      <div className="App scroll-smooth h-dvh overflow-auto overflow-x-clip">
        <div className="w-dvw h-dvh bg-zinc-900">
          <div
            className="w-full h-full flex flex-col items-center justify-center bg-slate-900 overflow-auto">
            {/* Main content container */}
            <div className="w-1/2 h-full rounded-3xl flex justify-between items-center">
              <div className="grid grid-cols-4 grid-rows-4 gap-4">
                <span
                  className="font-bold font-ubuntu text-7xl text-gray-300 col-span-2 row-span-2"><Element name="welcome" id="welcome"><TextAnim/></Element></span>
                <span className="col-span-2 row-span-2 col-start-2 row-start-3 text-xl">My name is Filip Sobczuk, a fullstack developer based in Łódź, Poland.<br/> I have worked on a wide range of projects, from game modding to chatting applications with a focus on creating clean, high-level programs that not only look good but also provide great user experience.</span>
              </div>
            </div>
          </div>
          <Projects/>
        </div>
      </div>
        {/*<Footer/>*/}
    </Navbar>
  );
}

export default App;
