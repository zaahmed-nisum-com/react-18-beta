import React, { Suspense } from "react";
import { Facebook } from 'react-content-loader'

//Suspense use to render a pre UI for user so in that way user can see some intrative UI while the main component is laoding
//Suspense can be use as SSR the fallback will run before any html,js load on page.

//Component to load by lazyloading with deplay of 5 sec
const ToDos = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    Math.floor(Math.random() * 10) >= 1
      ? import("../../components/todos")
      : Promise.reject(new Error())
  );
});

//Component to load by lazyloading with deplay of 10 sec
const Articals = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 9 * 2000)).then(() =>
    Math.floor(Math.random() * 10) >= 1
      ? import("../../components/articals")
      : Promise.reject(new Error())
  );
});

//Component to load by lazyloading with deplay of 20 sec
const Users = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 7 * 2000)).then(() =>
    Math.floor(Math.random() * 10) >= 1
      ? import("../../components/users")
      : Promise.reject(new Error())
  );
});

function SuspenseFeature(props) {
  return (
    <div>
      <div class="min-h-screem flex flex-row border">
        <Suspense
          fallback={
            <div className="w-2/4 h-36 border">
              <Facebook />
            </div>
          }
        >
          <div class="bg-green w-2/4 h-fit border">
            <ToDos />
          </div>
        </Suspense>
        <div className="w-2/4 border flex flex-col">
          <Suspense
            fallback={
              <div className="w-full h-36 border">
               <Facebook />
              </div>
            }
          >
            <div class=" bg-red border">
              <Users />
            </div>
          </Suspense>
          <Suspense
            fallback={
              <div className="w-full h-36 border">
                <Facebook />
              </div>
            }
          >
            <div class="bg-blue border">
              <Articals />
            </div>
          </Suspense>
        </div>
      </div>
      {/* Suspense will use to display some UI for user to interact while our component is loading and inprocess to display */}
      {/* fallback is the key params which render the first UI for user while component is in loading state  */}
      {/*
       */}
      {/* Suspense will use to display some UI for user to interact while our component is loading and inprocess to display */}
      {/* fallback is the key params which render the first UI for user while component is in loading state  */}
      {/* 
        </Suspense> */}
      {/* Suspense will use to display some UI for user to interact while our component is loading and inprocess to display */}
      {/* fallback is the key params which render the first UI for user while component is in loading state  */}
      {/* 
        </Suspense>
      </Suspense> */}
    </div>
  );
}

export default SuspenseFeature;
