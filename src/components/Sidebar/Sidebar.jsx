/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState ,useContext} from 'react'
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

function Sidebar() {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
         await onSent(prompt);
    }
    const toggle = () => {
   setExtended(prev=>!prev)
}


  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="menu">
            <img src={assets.menu_icon} alt="" onClick={toggle}  id='menuImg'/>
          </div>
          <div onClick={() => newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <div className="recent-title">
                <p>Recent</p>
                {prevPrompts.map((item, index) => {
                  return (
                    <>
                      <div
                        onClick={() => {
                          loadPrompt(item);
                          console.log(item);
                        }}
                        className="recent-history"
                      >
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0, 18)}...</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="bottom">
          <div className="bottom-items">
            <div className="bottom-item-data help">
              <img src={assets.question_icon} alt="" />
              {extended ? <p>Help</p> : null}
            </div>
            <div className="bottom-item-data activity">
              <img src={assets.history_icon} alt="" />
              {extended ? <p>Activity</p> : null}
            </div>
            <div className="bottom-item-data setting">
              <img src={assets.setting_icon} alt="" />
              {extended ? <p>Setting</p> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar