import React, { useEffect, useState } from "react";
import Board from "../playBoard/Board";
import NumberToSelect from "../playBoard/NumberToSelect";
import classes from "./Home.module.css";

const Home = (): JSX.Element => {
  const [selectedInputBtn, setSelectedInputBtn] = useState("");
  const [cellValue, setCellValue] = useState('');

  useEffect(() =>{
    setCellValue(selectedInputBtn)
  },[selectedInputBtn])
  return (
    <>
      <div className={classes.main}>
        <div>
          <Board cellValue={cellValue}/>
        </div>
        <div>
          <NumberToSelect selectedInputBtn={selectedInputBtn} setSelectedInputBtn={setSelectedInputBtn}/>
        </div>
      </div>
    </>
  );
};

export default Home;
