// src/components/PersonSwitcher.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import chatStore from "../store/chat/chat";

const SwitchUserPanel = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const location = window.location.href.split("/")[3];
  console.log(location);
  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const messageNotification = chatState.newDataCount > 0 && (
    <span className="notify">{chatState.newDataCount}</span>
  );

  return (
    <div className="switcher-div">
      <div>
        <Link to="/first-person">
          {location !== "first-person" && chatState.newDataCount > 0 && (
            <p>{messageNotification}</p>
          )}
          <button className="switcher">Person1</button>
        </Link>
      </div>
      <div>
        <Link to="/second-person">
          {location !== "second-person" && chatState.newDataCount > 0 && (
            <p>{messageNotification}</p>
          )}
          <button className="switcher">Person2</button>
        </Link>
      </div>
    </div>
  );
};

export default SwitchUserPanel;
