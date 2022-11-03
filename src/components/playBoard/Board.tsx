/* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  // fetchOwnAttributeSelector,
  setOwnAttributeData,
} from "../../ducks/playBoard";
import { CellAttribute, CellInfo } from "../../ducks/playBoard/types";
import { AppThunkDispatch } from "../../ducks/RootReducer";
import classes from "./Board.module.css";

type Props = {
  cellValue:string
}
/**
 * 数独ボードのコンポーネント
 * @returns 9x9のボード
 */
const Board = ({cellValue}:Props): JSX.Element => {
  const dispatch: AppThunkDispatch = useDispatch();
  let initCellInfo:CellInfo[]=[]
  for (var i = 1; i < 82; i++) {
    initCellInfo.push({
      index: i,
      value: '',
    })
  }
  const initAttributes: CellAttribute = {
    row: 0,
    col: 0,
    square: 0,
  };
  const initOtherAttributesList: number[] = [];

  const [selectedCell, setSelectedCell] = useState("");
  const [ownAttribute, setOwnAttribute] = useState(initAttributes);
  const [otherAttributesList, setOtherAttributesList] = useState(
    initOtherAttributesList
  );
  const [cellsInfo, setCellsInfo] = useState<CellInfo[]>(initCellInfo);

  // type boardResponseModel = {
  //   CellIndex: number,
  //   CellNumber: number
  // }

  // const [responseData, setresponseData] = useState(null as unknown as boardResponseModel[])
  
  const getTest = async () =>{
    //  axios.get(`http://localhost:8080/users`).then(res=>{setresponseData(res.data)}).catch(err=>{console.log('erro:',err)})
  };

  // 引数の行・列・3X3に属する値を全て返す処理
  const getOtherAttributesList = (param: CellAttribute) => {
    var result: number[] = [];
    for (let i = 1; i < 82; i++) {
      if (
        param.row === getOwnAttributes(i).row ||
        param.col === getOwnAttributes(i).col ||
        param.square === getOwnAttributes(i).square
      ) {
        result.push(i);
      }
    }
    return result;
  };

  // 引数の属する行・列・3X3を返す処理
  const getOwnAttributes = (param: number) => {
    let row = 0;
    let col = 0;
    let square = 0;
    let result: CellAttribute;
    if (param % 9 === 0) {
      row = param / 9;
    } else {
      row = Math.floor(param / 9 + 1);
    }
    col = Math.floor((param / 9) * 10) - Math.floor(param / 9) * 10;
    if (col === 0) {
      col = 9;
    }
    square = getThreeOnThree(row, col);
    result = { row: row, col: col, square: square };
    return result;
  };

  // 引数の属する3X3を返す
  const getThreeOnThree = (row: number, col: number) => {
    switch (true) {
      case (row === 1 || row === 2 || row === 3) &&
        (col === 1 || col === 2 || col === 3):
        return 1;
      case (row === 1 || row === 2 || row === 3) &&
        (col === 4 || col === 5 || col === 6):
        return 2;
      case (row === 1 || row === 2 || row === 3) &&
        (col === 7 || col === 8 || col === 9):
        return 3;
      case (row === 4 || row === 5 || row === 6) &&
        (col === 1 || col === 2 || col === 3):
        return 4;
      case (row === 4 || row === 5 || row === 6) &&
        (col === 4 || col === 5 || col === 6):
        return 5;
      case (row === 4 || row === 5 || row === 6) &&
        (col === 7 || col === 8 || col === 9):
        return 6;
      case (row === 7 || row === 8 || row === 9) &&
        (col === 1 || col === 2 || col === 3):
        return 7;
      case (row === 7 || row === 8 || row === 9) &&
        (col === 4 || col === 5 || col === 6):
        return 8;
      case (row === 7 || row === 8 || row === 9) &&
        (col === 7 || col === 8 || col === 9):
        return 9;
      default:
        return 0;
    }
  };

  // const setValue = (i:number) => {
  //  var res = '';
  //  if(!responseData){
  //    return res;
  //  }
  // responseData.forEach((item)=>{if(item.CellIndex === i){res = item.CellNumber.toString()}})
  // return res
  // }

  // 9x9マスのボードを生成する処理
  const createCell = () => {
    let cellTdList = [];
    let cellTrList = [];
    let cellBody = [];
    for (var i = 1; i < 82; i++) {
      if (i % 9 === 1) {
        cellTdList = [];
      }
      cellTdList.push(
        <td
          onClick={(e) => {
            setSelectedCell(e.currentTarget.id);
            setOwnAttribute(getOwnAttributes(Number(e.currentTarget.id)));
            dispatch(setOwnAttributeData(ownAttribute));
          }}
          className={`${classes.cell} ${
            selectedCell === i.toString() ? classes.primaryCell : ""
          } ${
            otherAttributesList.includes(i) && selectedCell !== i.toString()
              ? classes.otherAttributes
              : ""
          }`}
          id={i.toString()}
          key={i}
        >
        {cellsInfo[i-1].value}
        </td>
      );
      if (i % 9 === 0) {
        cellTrList.push(<tr key={i}>{cellTdList}</tr>);
      }
    }
    cellBody.push(cellTrList);
    return cellBody;
  };

  useEffect(() => {
    setOtherAttributesList(getOtherAttributesList(ownAttribute));
  }, [ownAttribute]);

  useEffect(() => {
    let newState = cellsInfo
    newState.forEach((cell)=>{
      if (cell.index.toString() === selectedCell){
        cell.value = cellValue
      }
    })
    setCellsInfo(newState)
  },[cellValue])

  return (
    <>
    <Table className={classes.table}>
      <tbody>{createCell()}</tbody>
    </Table>
    <Button onClick={()=>{getTest()}}>通信</Button>
    </>
  );
};

export default Board;
