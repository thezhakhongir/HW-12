import React from "react";
import classes from "./Toggle.module.css";

const Toggle = ({ toggled, onClick }) => {
  console.log(classes);
  return (
    <>
      <div
        onClick={onClick}
        className={
          toggled ? classes.toggle + " " + classes.night : classes.toggle
        }
      >
        <div className={classes.notch}>
            <div className={classes.icons__moon}></div>
            <div className={classes.icons__moon}></div>
            <div className={classes.icons__moon}></div>
        </div>
          <div className={classes.shapes}>
            <div className={classes.shape} id={classes.sm}></div>
            <div className={classes.shape} id={classes.sm}></div>
            <div className={classes.shape} id={classes.md}></div>
            <div className={classes.shape} id={classes.lg}></div>
          </div>
      </div>
    </>
  );
};

export default Toggle;
