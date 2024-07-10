import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(true);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*_+";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  let clicked = () => {
    const button = document.querySelector("button");
    button.innerHTML = "Copied";
  };

  useEffect(() => {
    passGenerator();
  }, [length, number, char, passGenerator]);

  const passwordRef = useRef(null);

  return (
    <>
      <div className="w-full h-full max-w-md mx-auto rounded-lg my-8 px-4 py-3 bg-gray-700 text-rose-400">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button  className="outline-none bg-gradient-to-br px-4 py-3 text-white from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600  dark:hover:text-gray-900 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0">
            Copy
          </button>

        
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
          {/* <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={char}
              id='characterInput'
              onChange={() => {
                setChar((prev) => !prev);
              }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
