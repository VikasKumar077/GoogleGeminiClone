/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello,Vikas</span>
                </p>
                <p className="help">How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Revise my writing and fix my grammar</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Draft an email to a recruiter to accept a job offer</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Help me understand American football</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    I’m sick and need help crafting a text message for my boss
                  </p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-bar">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter a prompt here"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />

              <div className="action">
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? (
                  <img src={assets.send_icon} alt="" onClick={() => onSent()} />
                ) : null}
              </div>
            </div>

            <p className="bottom-footer">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
