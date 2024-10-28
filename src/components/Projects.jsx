import {useRef} from "react";
import {useIsVisible} from "../App";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  //
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);
  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);
  return (
    <div className="w-dvw h-full bg-slate-900 flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-2 w-2/3 h-full">

        <div ref={ref1}
             className={`transition-opacity ease-out duration-150 ${isVisible1 ? "opacity-100" : "opacity-0"} self-center`}>
          <ProjectCard imgPath="hegeworld" link="https://github.com/HegemonStudio/HegeWorld" title="HegeWorld" text="Minecraft plugin-pack that adds a whole new meaning to the game: Guilds, bases, raiding these are just a couple of features that this projects adds to the game"/>
        </div>
        <div ref={ref2}
             className={`transition-opacity ease-out duration-200 ${isVisible2 ? "opacity-100" : "opacity-0"} self-center`}>
          <ProjectCard imgPath="filetree" link="https://github.com/Drakvlaa/filetree" title="FileTree" text="Program written in C that is used to quickly and efficiently list listed directories with support for Windows, Linux and mac"/>
        </div>
        <div ref={ref3}
             className={`transition-opacity ease-out duration-300 ${isVisible3 ? "opacity-100" : "opacity-0"} self-center`}>
          <ProjectCard imgPath="raycast" link="https://scratch.mit.edu/projects/1087763462" title="Scratch Raycast" text="implementation of 3D world in a block-based high-level programming language Scratch using a basic graphics rendering algorithm: Raycast."/>
        </div>
        <div ref={ref4}
             className={`transition-opacity ease-out duration-500 ${isVisible4 ? "opacity-100" : "opacity-0"} self-center`}>
          <ProjectCard imgPath="weave" link="https://github.com/HegemonStudio" title="Weave" text="Chatting app created to provide quick, light-weight, secure and trustworthy experience."/>
        </div>
        <div ref={ref5}
             className={`transition-opacity ease-out duration-700 ${isVisible5 ? "opacity-100" : "opacity-0"} col-start-2  self-center`}>
          <ProjectCard/>
        </div>
        <div ref={ref6}
             className={`transition-opacity ease-out duration-1000 ${isVisible6 ? "opacity-100" : "opacity-0"} col-start-3  self-center`}>
          <ProjectCard/>
        </div>

      </div>
    </div>
  )
}