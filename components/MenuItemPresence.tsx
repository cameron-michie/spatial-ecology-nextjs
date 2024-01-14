import { useEffect, useState } from "react";
import * as Ably from 'ably/promises';

interface MenuItemProps { 
  id: string,
  name:string,
  macro:string,
  energy:number,
  active:boolean,
}
  
export default function MenuItem(props:MenuItemProps) {
  const [imageSrc, setImageSrc] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState('');
  const [nameChanged, setNameChanged] = useState(false);

  const inputName = () => {
    setShowInput(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value.slice(0, 10);
    setName(name);
    setNameChanged(true);
    const tempRestClient = new Ably.Rest({
      authUrl: '/token',
      authMethod: 'POST',
      clientId: `rest_${Date.now().toString().slice(-5)}`
    });

    var channel = tempRestClient.channels.get('user-data-channel');
    channel.publish('user-name-update', {"id": props.id, "name": name});
  };

  const handleSubmit = () => {
    console.log("Submitted value:", name);
    setShowInput(false);
  };

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
        <div>
            {props.active ? (
              showInput ? (
                <div>
                  <input type="text" value={name} onChange={handleNameChange} />
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              ) : (
                <div onClick={inputName}>{nameChanged ? name : "Click to name"}</div>
              )
            ) : (
              props.name !== "default" ? props.name : "user_" + props.id.slice(-5)
            )}
          </div>
        <p>  
          Energy: {props.energy}
        </p>
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