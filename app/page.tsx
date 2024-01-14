/**
 * Warning: Opening too many live preview tabs will slow down performance.
 * We recommend closing them after you're done.
 */
import React from "react";
import "./global.css";

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

      <div className="flex flex-col grow gap-6 pt-12 pr-12 pb-12 pl-12 rounded-2xl border-slate-100 border-t border-b border-l border-r border-solid border h-[864px] bg-slate-50">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-start items-start gap-4 h-[172px]">
          <div className="flex flex-row justify-center items-center gap-6 w-[700px]">
          <div className="text-2xl font-bold text-gray-800">Spatial Ecology Game</div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 h-[488px]">
              <div className="flex flex-row justify-start items-start gap-4">
                <div className="flex flex-col justify-start items-start pt-6 pr-6 pb-6 pl-6 rounded-2xl h-[216px] bg-white">
                  <div className="flex flex-col justify-center items-start gap-4 h-[168px]">
                    <div className="flex flex-row justify-start items-center gap-4 w-80">
                      <div className="flex flex-row justify-center items-center pt-3 pr-3 pb-3 pl-3 border rounded-lg h-14 bg-gradient-to-br from-[rgba(255,255,255,1)] from-29% to-[rgba(248,250,252,1)]">
                        <div className="flex justify-center items-center h-8">
                          <img
                            width="27.7px"
                            height="31.7px"
                            src="/assets/Authentication.svg"
                            alt="Authentication"
                          />
                        </div>
                      </div>
                      <div className="font-manrope text-base min-w-[109px] whitespace-nowrap text-black text-opacity-100 leading-6 font-medium">
                        Example
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4 h-24">
                      <div className="font-manrope grow text-sm w-80 text-slate-800 text-opacity-100 leading-5 font-light">
                        <p>Move around with arrow keys.</p>
                        Grow bigger by absorbing green microbes, and avoiding red microbes...
                        <br />
                      </div>
                      <div className="flex justify-between items-center gap-1 rounded-md w-24 h-5 overflow-hidden">
                        
                        <div className="font-manrope text-sm min-w-[78px] whitespace-nowrap text-sky-600 text-opacity-100 leading-5 font-medium">
                          
                        </div>
                        
                        
                        <div className="flex flex-col justify-center items-center w-4 h-4">
                        <img
                            width="10.3px"
                            height="7.2px"
                            src="/assets/ExploreNow.svg"
                            alt="Explore Now"
                          />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start pt-6 pr-6 pb-6 pl-6 rounded-2xl h-[216px] bg-white">
                  <div className="flex flex-col justify-center items-start gap-4 h-[168px]">
                    <div className="flex flex-row justify-start items-center gap-4 w-80">
                      <div className="flex flex-row justify-center items-center pt-3 pr-3 pb-3 pl-3 border rounded-lg h-14 bg-gradient-to-br from-[rgba(255,255,255,1)] from-29% to-[rgba(248,250,252,1)] to-134%">
                        <div className="flex flex-col justify-center items-center h-8">
                          <img
                            width="30.3px"
                            height="25px"
                            src="./assets/PubSubChannels.svg"
                            alt="Pub/Sub Channels"
                          />
                        </div>
                      </div>
                      <div className="font-manrope text-base min-w-[136px] whitespace-nowrap text-black text-opacity-100 leading-6 font-medium">
                        Play now
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4 h-24">
                      <div className="font-manrope grow text-sm w-80 text-slate-800 text-opacity-100 leading-5 font-light">
                        Are your ready to enter the biome?
                      </div>
                      <div className="flex justify-between items-center gap-1 rounded-md w-24 h-5 overflow-hidden">
                      <a href="/game">
                        <div className="font-manrope text-sm min-w-[78px] whitespace-nowrap text-sky-600 text-opacity-100 leading-5 font-medium">
                          Play game...
                        </div>
                        </a>
                        <a href="/game">                      
                        <div className="flex flex-col justify-center items-center w-4 h-4">
                        <img
                            width="10.3px"
                            height="7.2px"
                            src="/assets/ExploreNow.svg"
                            alt="Explore Now"
                          />
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
;

export default Home;
