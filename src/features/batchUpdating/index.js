import React, { useState } from "react";
import { flushSync } from "react-dom";

function BatchUpdating(props) {
  const [counter, setCounter] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  //console.log to print counter value
  console.log(counter, "counter");
  //console.log to print isDark value
  console.log(isDarkMode, "isDarkMode");
  
  //In react previous version "17" react give us a batchupadte for states so if multi states are updaing 
  //in a single event handler the react will batch update the states and render the UI only onces
  //but if we use promise chains, async code, or native event handlers the batchupdate will not work in
  //react 17 so in react 18 they provide us a ease in event promise chains, async code, or native event handlers now
  //have batchupdate functionality.


  //this function has a promise in which i am updating 2 states simultaneously
  //and the react new feature will re-render the UI only onces after all the states update 
  function handleThemeToggle() {
    Promise.resolve().then(() => {
      setCounter(counter + 1);
      setIsDarkMode(!isDarkMode);
    });
  }

  //this function has a promise in which i use flushSync function to update 
  //state, so the batch state does not happend and the react will re-render the
  //UI every time when any state update
  function handleThemeToggleWithFlushSync() {
    Promise.resolve().then(() => {
      flushSync(() => {
        setCounter(counter + 1);
      });
      flushSync(() => {
        setIsDarkMode(!isDarkMode);
      });
    });
  }

  return (
    <div>
      {/* input to trigger handlethemetoggle func */}
      <input type="checkbox" onChange={handleThemeToggle} />
      {/* input to trigger handlethemetogglewithflushsync func */}
      <input type="checkbox" onChange={handleThemeToggleWithFlushSync} />
    </div>
  );
}

export default BatchUpdating;
