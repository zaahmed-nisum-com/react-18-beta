import React, { Suspense } from "react";

//Suspense use to render a pre UI for user so in that way user can see some intrative UI while the main component is laoding 
//Suspense can be use as SSR the fallback will run before any html,js load on page.

//Component to load by lazyloading with deplay of 5 sec
const ToDos = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    Math.floor(Math.random() * 10) >= 4
      ? import("../../components/todos")
      : Promise.reject(new Error())
  );
});

//Component to load by lazyloading with deplay of 10 sec
const Articals = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 2000)).then(() =>
    Math.floor(Math.random() * 10) >= 5
      ? import("../../components/articals")
      : Promise.reject(new Error())
  );
});

//Component to load by lazyloading with deplay of 20 sec
const Users = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 4000)).then(() =>
    Math.floor(Math.random() * 10) >= 6
      ? import("../../components/users")
      : Promise.reject(new Error())
  );
});

function SuspenseFeature(props) {
  return (
    <div>
      {/* Suspense will use to display some UI for user to interact while our component is loading and inprocess to display */}
      {/* fallback is the key params which render the first UI for user which component is in loading state  */}
      <Suspense fallback={<p> Loading 1...</p>}>
        <ToDos />
        {/* Suspense will use to display some UI for user to interact while our component is loading and inprocess to display */}
        {/* fallback is the key params which render the first UI for user which component is in loading state  */}
        <Suspense fallback={<p> Loading 2...</p>}>
          <Users />
        </Suspense>
        {/* Suspense will use to display some UI for user to interact while our component is loading and inprocess to display */}
        {/* fallback is the key params which render the first UI for user which component is in loading state  */}
        <Suspense fallback={<p> Loading 3...</p>}>
          <Articals />
        </Suspense>
      </Suspense>
    </div>
  );
}

export default SuspenseFeature;
