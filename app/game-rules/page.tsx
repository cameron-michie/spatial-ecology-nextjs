/**
 * Warning: Opening too many live preview tabs will slow down performance.
 * We recommend closing them after you're done.
 */
import React from "react";
import "../global.css";
import Sidebar from "../../components/Sidebar";

const Home = () => {

  const pageId = "Start";
  
  return (
    <>
      <div className="flex flex-col grow gap-6 pt-12 pr-12 pb-12 pl-12 rounded-2xl border-slate-100 border-t border-b border-l border-r border-solid border h-[864px] bg-slate-50">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-start items-start gap-4 h-[172px]">
            <div className="flex flex-row justify-center items-center gap-6 w-[264px]">
            </div>
            <div className="font-manrope text-[18px] max-w-screen-sm text-slate-800 text-opacity-100 leading-6 font-light">
              <span className="text-black text-opacity-100 font-bold">
                Game rules&nbsp;
              </span>
              <p>On the board are predators and prey.</p>
              
              <p>The prey gain energy by feeding off the empty white spaces</p>
              
              <p>If two prey bump into each other, they procreate, incurring an energy cost, and spawning another prey in that space.</p> 
              
              <p>The predators gain energy by feeding on the prey, and they can also procreate by bumping into each other.</p>
              <p>

              </p>
              <p>You have a character that you can move around. By bumping into the prey you can absorb the them and gain their energy, but if you instead absorb the predators you lose energy equal to their energy.</p>

              <p>If you bump into another player, the player with the higher energy absorbs the lower energy. If you gain energy, you grow bigger, and move less quickly.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
;

export default Home;
