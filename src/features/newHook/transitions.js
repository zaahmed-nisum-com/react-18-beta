import React, { useEffect, useState, useTransition } from "react";
import { apis } from "../../apis/fetchs";
import "./style.css";

function Transitions() {
  const [query, setQuery] = useState("");
  //this hook will use to delay the update state max 2 sec's.
  const [startTransition] = useTransition({ timeoutMs: 2000 });
  const [highlight, setHighlight] = useState("");
  const [names, setNames] = useState([]);

  //this function will set the requested word by user in query variable and in highligh variable using startTransition
  //func with callback. the usetransittion hook is basically use to make UI responsive when the component is updating conteniouly and re-rederning
  //the UI, in that case you don't want user to stuck on a locked UI.
  //some states need to update immedialty and some can take time so in that way UI will not stuck and user
  //can see some of data for interact
  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => setHighlight(value));
  };

  //this useeffect will get call the fetchTitles api and set the response in setNames
  useEffect(() => {
    (async () => {
      const names = await apis.fetchTitles();
      setNames(names);
    })();
  }, []);

  return (
    <div>
      {/* input used to get the user request input */}
      <input onChange={changeHandler} value={query} type="text" />
      {names.map((_, i) => (
        <ListItem key={i} name={_} highlight={highlight} />
      ))}
    </div>
  );
}

//func to highlight the work selected by user through input.
//func rquired two params, name and highlight
//this function return a sentence with highlight the user selected work in sentence
function ListItem({ name, highlight }) {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    console.log("ListItem name=>", name);
    return <div>{name}</div>;
  }
  return (
    <div>
      {name.slice(0, index)}
      <span className="highlight">
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
}

export default Transitions;
