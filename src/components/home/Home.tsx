import React, { useEffect, useState } from "react";
import Board from "../playBoard/Board";
import NumberToSelect from "../playBoard/NumberToSelect";
import classes from "./Home.module.css";

const Home = (): JSX.Element => {
  return (
    <>
      <div className={classes.main}>
        <div>
          <Board />
        </div>
        <div>
          <NumberToSelect />
        </div>
      </div>
    </>
  );
};

export default Home;
