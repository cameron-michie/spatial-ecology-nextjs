import { useEffect, useState } from "react";

interface MenuItemProps { 
  id: string,
  name:string,
  macro:string,
  energy:number,
  active:boolean,
}
  
export default function MenuItem(props:MenuItemProps) {
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
    setImageSrc(props.macro);
  }, [props.macro]);

  return (
    <div className={`flex justify-center items-center rounded-md w-[272px] mb-2 h-10 hover:bg-white group ${props.active && "bg-slate-200"}`}>
    <div className={`flex justify-between items-center space-x-2 font-manrope min-w-[256px] text-opacity-100 leading-4 font-bold group-hover:text-sky-700 text-base text-black ${props.active ? "tracking-widest" : ""}`}>
      <div className="flex-shrink-0">
        {imageSrc && 
          <img src={`data:image/png;base64,${imageSrc}`} alt="Game State" className="smaller-image" />
        }
      </div>
      <div className="flex-grow">
        <p>{props.name}</p>
        <p>Energy: {props.energy}</p>
      </div>
      <style>
        {`
          .smaller-image {
            height: 40px; /* Adjust as needed to match row height */
            image-rendering: pixelated;
          }
        `}
      </style>
    </div>
  </div>
  

  )
}