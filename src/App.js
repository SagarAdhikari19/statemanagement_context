import Child from "./child";
import React, { createContext, useState } from "react";
export const GlobaInfo = createContext();
function App() {

  const [color, setcolor] = useState("red");
  const [colortwo, setcolortwo] = useState("green")

  return (
    <GlobaInfo.Provider value={{ appcolor: color, seccolor: colortwo }}>
      <div>
        <h1>
          hello
        </h1>


      </div>
      <Child />

    </GlobaInfo.Provider>
  );
}

export default App;
