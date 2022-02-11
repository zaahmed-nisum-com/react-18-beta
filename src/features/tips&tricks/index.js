import React, { useState } from "react";

const TipsTricks = (props) => {
  const [payload, setPayload] = useState({
    counter: 0,
    flag: false,
  });

  const handle = (field, value) => {
    setPayload((state) => ({
      ...state,
      [field]: value,
    }));
  };
  return (
    <div>
      <button onClick={() => handle("counter", payload.counter + 1)}>
        counter
      </button>
      <button onClick={() => handle("flag", !payload.flag)}>flag</button>
      <p>{payload.counter}</p>
      <p>{payload.flag ? 1 : 0}</p>
    </div>
  );
};

export default TipsTricks;
