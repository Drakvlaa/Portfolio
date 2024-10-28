import hege from "../assets/ore.gif"
import filetree from "../assets/filetreeExample.gif"
import defa from '../assets/lapeczka.JPG'
import ray from '../assets/ray.gif'
import weave from '../assets/weave.png'

export default function ProjectCard( props ) {
  const images = {
    'default': defa,
    'hegeworld': hege,
    'filetree': filetree,
    'raycast': ray,
    'weave': weave,
  }
  return (
    <div className="bg-white/10 backdrop-blur-md w-80 h-96 rounded-2xl grid grid-rows-2 grid-cols-1 duration-200 ease-in hover:scale-110 hover:shadow-purple-800 shadow-2xl">
      <img src={props.imgPath in images ? images[props.imgPath] : images['default']} alt="card" className="h-full w-full rounded-t-2xl image-full"/>
      <div className="w-full h-full p-2 mt-3">
        <center><a href={props.link} target="_blank" className="text-2xl font-semibold">{props.title ? props.title : "Project"}</a><br/>
          <span className="font-ubuntu font-medium">{props.text ? props.text : "description"}</span><br/>
        </center>
      </div>
    </div>
  )
}