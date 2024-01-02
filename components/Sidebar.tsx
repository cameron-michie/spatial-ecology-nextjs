import MenuItem from "./MenuItem";
import {Types} from "ably";
import { useChannel, usePresence } from 'ably/react';


export default function Sidebar(props: {pageId : string}) {

  const menuItems = [
    {
      menuItemId: "Current player",
      menuItemText: "You - click to name yourself",
      menuItemActive: true,
    },
    {
      menuItemId: "Player 2",
      menuItemText: "Player 2",
      menuItemActive: false,
    },
    
  ]
  

  return(
    <div className="flex flex-col max-w-[328px] min-w-[268px] justify-between items-start gap-6 pt-6 pr-6 pb-6 pl-6 rounded-2xl border-slate-100 border-t border-b border-l border-r border-solid border bg-slate-50">
      <div className="flex flex-col justify-start items-start gap-6">
          <img width="102px" height="32px" src="/assets/AblyLogoWithText.svg" alt="AblyLogoWithText" />
          <div className="flex flex-col justify-start items-start">
          {menuItems.map(
              ({
                menuItemId,
                menuItemText
              }) => (
              <MenuItem
                  key={menuItemId}
                  menuItemText={menuItemText}
                  menuItemActive={(menuItemId==props.pageId) ? true : false}
              />
              )
          )}
          </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-6">
          <img width="272px" height="1px" src="/assets/HorizontalRule.svg" alt="Rule" />
          <div className="flex flex-col justify-start items-start">
          </div>
          <img width="272px" height="1px" src="/assets/HorizontalRule.svg" alt="Rule" />
          <div className="flex flex-row justify-start items-center gap-6">


          </div>
      </div>
    </div>
  )
}