import { useState } from "react";
import React from "react";

const Counter = () => {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);

  return (
    <>
      <section className="container">
        <h2>Det er</h2>
        <div className="countdown">
          <article>
            <p>{days}</p>
            <h3>dager</h3>
          </article>
          <article>
            <p>{hours}</p>
            <h3>timer</h3>
          </article>
          <article>
            <p>{minutes}</p>
            <h3>minutter</h3>
          </article>
          <article>
            <p>{seconds}</p>
            <h3>sekunder</h3>
          </article>
        </div>
        <h2>igjen til jul</h2>
      </section>
    </>
  );
};

export default Counter;
