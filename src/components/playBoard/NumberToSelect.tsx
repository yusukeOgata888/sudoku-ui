import { useState } from "react";
import { Table } from "react-bootstrap";
import classes from "./Board.module.css";
import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../ducks/RootReducer";
import { setNumberAtPushed } from "../../ducks/playBoard";

const NumberToSelect = (): JSX.Element => {
  const dispatch: AppThunkDispatch = useDispatch();
  const [selectedCell, setSelectedCell] = useState("");
  const createButton = () => {
    let buttonTrList = [];
    let buttonTdList = [];
    let buttonList = [];

    for (let i = 1; i < 10; i++) {
      if (i % 3 === 1) {
        buttonTdList = [];
      }
      buttonTdList.push(
        <td
          onClick={(e) => {
            setSelectedCell(e.currentTarget.id);
            dispatch(setNumberAtPushed(Number(e.currentTarget.id)));
          }}
          className={`${classes.cell} ${classes.secondaryBorder} ${
            selectedCell === i.toString() && classes.selectedNumber
          } ${classes.numberToSelect}`}
          key={i}
          id={i.toString()}
        >
          {i}
        </td>
      );
      if (i % 3 === 0) {
        buttonTrList.push(<tr key={i}>{buttonTdList}</tr>);
      }
    }
    buttonList.push(buttonTrList);
    return buttonList;
  };
  return (
    <Table className={classes.table}>
      <tbody>{createButton()}</tbody>
    </Table>
  );
};

export default NumberToSelect;
