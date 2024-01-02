import React, { useState } from 'react';
import { useChannel, usePresence } from 'ably/react';
import MenuItem from "./MenuItemPresence";
import { Types } from "ably";
import PlayerInfo from "./playerInfoTypes"
  
interface SidebarProps {
    players: Record<string, PlayerInfo>;
    thisClientId: string;
  }
  const Sidebar: React.FC<SidebarProps> = ({ players, thisClientId }) => {
    
    return (
      <div className="flex flex-col max-w-[400px] min-w-[200px] justify-between items-start gap-6 pt-6 pr-6 pb-6 pl-6 rounded-2xl border-slate-100 border bg-slate-50">
        <div className="flex flex-col justify-start items-start gap-6">
          <img width="102px" height="600px" src="/assets/AblyLogoWithText.svg" alt="AblyLogoWithText" />
          <div className="flex flex-col justify-start items-start">
          {Object.values(players)
            .sort((a, b) => b.energy - a.energy) // Sorting players by energy in descending order
              .map(player => (
                <MenuItem 
                  key={player.clientId}
                  id={player.clientId}
                  active={player.clientId === thisClientId}
                  name={player.name}
                  macro={player.characterMacro}
                  energy={player.energy}
                />
            ))}
          </div>
        </div>
        {/* Additional content can go here */}
      </div>
    );
  }
export default Sidebar;