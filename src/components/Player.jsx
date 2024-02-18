import { useRef, useState } from "react";
export default function Player() {
  const [playerName,setPlayerName]=useState()
  const player=useRef()
  function handleClick(){
setPlayerName(player.current.value)
player.current.value=''// this line is not a good way ... react was build to hadle interactions with UI but here we are doing by ourself 
//player.current.click()// focus etc can be performed
// can not use player.current.vale current in line 13 ad it will give error ---> in first render ref will create a connection with the html element but hereif we go by this method 
//we will doinf accessing undefined as connection  is not there  
}
  return (
    <section id="player">
      <h2>{playerName ?? 'Welcome unknown entity'}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
