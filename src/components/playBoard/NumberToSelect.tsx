import { Table } from "react-bootstrap";
import classes from "./Board.module.css";

type Props = {
  selectedInputBtn:string;
  setSelectedInputBtn: (id:string) => void
}
const NumberToSelect = ({selectedInputBtn,setSelectedInputBtn}:Props): JSX.Element => {
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
          onClick={(e) => setSelectedInputBtn(e.currentTarget.id)}
          className={`${classes.cell} ${classes.secondaryBorder} ${
            selectedInputBtn === i.toString() && classes.selectedNumber
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
