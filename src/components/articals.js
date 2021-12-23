import React from "react";

function Articals() {
  const articals_ = [true, true, true];
  return (
    <div>
      {articals_.map((_, i) => {
        return <p key={i}>Hye Articals</p>;
      })}
    </div>
  );
}

export default Articals;
