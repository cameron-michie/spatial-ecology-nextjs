/**
 * Warning: Opening too many live preview tabs will slow down performance.
 * We recommend closing them after you're done.
 */
import React from "react";
import "../global.css";

const Home = () => {

  const pageId = "Start";
  
  return (
    <>
      <div className="flex flex-col grow gap-6 pt-12 pr-12 pb-12 pl-12 rounded-2xl border-slate-100 border-t border-b border-l border-r border-solid border h-[864px] bg-slate-50">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-start items-start gap-4 h-[172px]">
          <div className="flex flex-row justify-center items-center gap-6 w-[264px]">
          </div>
          <div className="font-manrope text-[18px] max-w-screen-sm text-slate-800 text-opacity-100 leading-7 font-light"> {/* Increased line height */}
            <span className="text-black text-opacity-100 font-bold">
              Game rules&nbsp;
            </span>
            <p>On the board are <span style={{ color: 'red', fontFamily: 'monospace' }}>predators</span> and <span style={{ color: 'green', fontFamily: 'monospace' }}>prey</span>.</p>
            
            <p>The <span style={{ color: 'green', fontFamily: 'monospace' }}>prey</span> gain <span style={{ fontFamily: 'monospace' }}>energy</span> by feeding off the empty white spaces</p>
            
            <p>If two <span style={{ color: 'green', fontFamily: 'monospace' }}>prey</span> bump into each other, they procreate, incurring an <span style={{ fontFamily: 'monospace' }}>energy</span> cost, and spawning another <span style={{ color: 'green', fontFamily: 'monospace' }}>prey</span> in that space.</p> 
            
            <p>The <span style={{ color: 'red', fontFamily: 'monospace' }}>predators</span> gain <span style={{ fontFamily: 'monospace' }}>energy</span> by feeding on the <span style={{ color: 'green', fontFamily: 'monospace' }}>prey</span>, and they can also procreate by bumping into each other.</p>
            <p></p>
            <p>You have a character that you can move around. By bumping into the <span style={{ color: 'green', fontFamily: 'monospace' }}>prey</span> you can absorb them and gain their <span style={{ fontFamily: 'monospace' }}>energy</span>, but if you instead absorb the <span style={{ color: 'red', fontFamily: 'monospace' }}>predators</span> you lose <span style={{ fontFamily: 'monospace' }}>energy</span> equal to their <span style={{ fontFamily: 'monospace' }}>energy</span>.</p>

            <p>If you bump into another <span style={{ fontFamily: 'monospace' }}>player</span>, the <span style={{ fontFamily: 'monospace' }}>player</span> with the higher <span style={{ fontFamily: 'monospace' }}>energy</span> absorbs the lower <span style={{ fontFamily: 'monospace' }}>energy</span>. If you gain <span style={{ fontFamily: 'monospace' }}>energy</span>, you grow bigger, and move less quickly.</p>
          </div>
          </div>
          </div>
          </div>

    </>
  )
}
;

export default Home;
