import React from "react";
import styles from "./timer.module.scss";

function Time({ days, hours, minutes, seconds }){
    
    return (
        <div className={styles.coutdown}>
        <h1>Voting ends </h1>
        <div className={styles.time}>
        <div className={styles.digit_text}>
    <span className={styles.digit}>
    {days < 9 ? "0" + days : days}:
    </span>
    <span className={styles.text}>days</span>
        </div>
        <div className={styles.digit_text}>
    <span className={styles.digit}>
    {hours < 9 ? "0" + hours : hours}:
    </span>
    <span className={styles.text}>Hours</span>
        </div>
        <div className={styles.digit_text}>
    <span className={styles.digit}>
    {minutes < 9 ? "0" + minutes : minutes}:
    </span>
    <span className={styles.text}>Minites</span>
        </div>
        <div className={styles.digit_text}>
    <span className={styles.digit}>

    {seconds < 9 ? "0" + seconds : seconds}
    </span>
    <span className={styles.text}>Seconds</span>
        </div>
    
        </div>
        </div>
      )

}
export default Time;