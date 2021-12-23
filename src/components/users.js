import React from "react";

function Users(props) {
  const users_ = [true, true, true];

  return (
    <div>
      {users_.map((_, i) => {
        return <p key={i}>Hye User</p>;
      })}
    </div>
  );
}

export default Users;
