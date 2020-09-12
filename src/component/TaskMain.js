import  React, { useState, useEffect } from 'react';
import SimpleTabs from "./SimpleTabs";
import Input from "./input";
import { Button } from '@material-ui/core';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const defaultRows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

export default function TaskMain() {
    //以下這兩個要寫在TaskMain裡＠＠？
    const [rows, setRows] = useState([]);
    useEffect(() => {
        /* componentDidMount 區*/
        setRows(defaultRows)
        return () => {
          /* componentWillUnmount區 */
         
        };
      }, []);

      // 父層新增可以改變資料的地方
      const changeData = (data) => {
       // setRows(data)
       console.log(data)
       setRows(data)
     
    }
    // 清空資料
    const cleanData = () => {
        console.log("clean data")
        setRows([])
     }

  return (
<div>
    <Input changefunc={changeData}/>
    <SimpleTabs data={rows}/>
    <button onClick={cleanData}>
           清空資料
          </button>
    </div>
  );
}
