import { useState } from "react";
import React from "react";
import "./counter.css";

const Counter = () => {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);

  return (
    <>
      <section className="container">
        <h2>Det er</h2>
        <div className="counter-wrapper">
          <article>
            <div className="number-wrapper">
              <p className="counter-numbers">{days}</p>
            </div>
            <h3>dager</h3>
          </article>
          <article>
            <div className="number-wrapper">
              <p className="counter-numbers">{hours}</p>
            </div>
            <h3>timer</h3>
          </article>
          <article>
            <div className="number-wrapper">
              <p className="counter-numbers">{minutes}</p>
            </div>
            <h3>minutter</h3>
          </article>
          <article>
            <div className="number-wrapper">
              <p className="counter-numbers">{seconds}</p>
            </div>
            <h3>sekunder</h3>
          </article>
        </div>
        <h2>igjen til jul</h2>
      </section>
    </>
  );
};

export default Counter;
