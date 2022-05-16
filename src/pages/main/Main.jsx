import React from "react";
import { Link } from "react-router-dom";
import classes from "./Main.module.css";

export default function Main() {

  return (
    <div className={classes.main_wrapper}>
      <div className={classes.main}>
        <div className={classes.main__header}>Pomadoro</div>
        <div className={classes.main__content__header}>Як користуватись?</div>
        <div className={classes.main__content}>
          <p>
            Цей метод використовує таймер для того, щоб розбити роботу на
            25-хвилинні інтервали, розділені короткими перервами.
          </p>
          <p>
            Після 4х робочих інтервалів потрібно відпочити трішки більше, тому
            перерва триває 30 хвилин, після чого таймер перезапускається.
          </p>
          <p>
            Не рекомендується відволікатися на будь-які фактори під час робочого
            інтервалу. Якщо так сталося, краще перезапустити таймер і почати з
            початку.
          </p>
          <Link to="/timer">Почати роботу</Link>
        </div>
      </div>
    </div>
  );
}
