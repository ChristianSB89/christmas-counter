import { useState, useEffect } from "react";
import React from "react";
import "./counter.css";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countDown = () => {
    const endDate = new Date("December 24, 2023 00:00:00");
    const today = new Date().getTime();

    const timeDiff = endDate - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(timeDiff / days);
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMinutes = Math.floor((timeDiff % hours) / minutes);
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
  };

  useEffect(() => {
    setInterval(countDown, 1000);
  });

  return (
    <>
      <section className="container">
        <h3>Det er</h3>
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
        <h3>igjen til jul</h3>
      </section>
    </>
  );
};

export default Counter;
