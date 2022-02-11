import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./style.css";
import chatStore from "../store/chat/chat";

function PersonOne(props) {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const [messagInput, setMessageInput] = useState("");

  let ref_ = useRef(null);

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  useEffect(() => {
    console.log(ref_.current.scrollHeight);
    ref_.current.scrollTop = ref_.current.scrollHeight;
  }, []);

  const onSendMessage = (e) => {
    const messageObject = {
      person: "first-person",
      text: messagInput,
    };
    chatStore.sendMessage(messageObject);
    setMessageInput("");
    setTimeout(() => {
      ref_.current.scrollTop = ref_.current.scrollHeight;
    }, 500);
  };

  return (
    <div>
      <h2>Person one</h2>
      <div className="chat-message-container" ref={ref_}>
        {chatState.data.map((message) => (
          <div style={{ height: "50px" }}>
            <p
              className={message.person}
              style={
                message.person === "first-person"
                  ? { float: "right" }
                  : { float: "left" }
              }
            >
              {message.text}
            </p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={messagInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="type message here"
        />
        <button onClick={onSendMessage}>Send Message</button>
      </div>
    </div>
  );
}

export default PersonOne;
