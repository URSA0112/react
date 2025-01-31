"use client";
import { useState } from "react";
import styles from "./globals.css";

export default function Home() {
const [number, setNumber] = useState(0);
const add = ()=>{
setNumber (number + 1) 

}
const sub = ()=>{
  if(number > 0 == true)
  {setNumber (number -1 )}
}

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={add}>ADD +</button>
      <button onClick={sub}>Sub - </button>
    </div>
  );
}
