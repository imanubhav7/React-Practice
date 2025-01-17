import { useState } from "react"


function App() {
  const[color, setColor] = useState("blue")

  return (
   
      <div className="w-full duration-200 h-screen" style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap bg-gray-300 justify-center px-3 py-2 gap-3 shadow-lg rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "red"}} >Red</button>
          </div>
          <div className="flex flex-wrap bg-gray-300 justify-center px-3 py-2 gap-3 shadow-lg rounded-3xl">
            <button onClick={() => setColor("blue")}  className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "blue"}} >BLue</button>
          </div>
          <div className="flex flex-wrap bg-gray-300 justify-center px-3 py-2 gap-3 shadow-lg rounded-3xl">
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "green"}} >Green</button>
          </div>
          <div className="flex flex-wrap bg-gray-300 justify-center px-3 py-2 gap-3 shadow-lg rounded-3xl">
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "yellow"}} >Yellow</button>
          </div>
          <div className="flex flex-wrap bg-gray-300 justify-center px-3 py-2 gap-3 shadow-lg rounded-3xl">
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "purple"}} >Purple</button>
          </div>
          <div className="flex flex-wrap bg-gray-300 justify-center px-3 py-2 gap-3 shadow-lg rounded-3xl">
            <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black" style={{backgroundColor: "white"}} >White</button>
          </div>
          <div className="flex flex-wrap bg-gray-300 justify-center px-3 py-2 gap-3 shadow-lg rounded-3xl">
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "orange"}} >Orange</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
