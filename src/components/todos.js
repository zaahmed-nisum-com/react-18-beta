import React, { useEffect, useState } from "react";
import { apis } from "../apis/fetchs";

function ToDos(props) {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    async function getToDos() {
      const response = await apis.fetchToDos();
      console.log(response);
      setToDos(response);
    }
    getToDos();
  }, []);
  return (
    <div>
      <ul>
        {todos.map((post) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDos;
