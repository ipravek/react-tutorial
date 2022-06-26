import React, {useState} from "react";
import style from "./events.module.css";

function Events() {

  const [name, setName] = useState("")

  const event = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }
  return (
    <>
      <div className={style.container}>
        <h1 className={style.h1}> React Events </h1>
        <div className={style.box}>
          <input type="text" ></input>
         <button onClick={event}>Click</button>
        </div>
        <div className="display-input">
          {name}
        </div>
      </div>
    </>
  );
}

export default Events;
