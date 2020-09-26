import React, { useState, useEffect } from 'react';
import SimpleTabs from './SimpleTabs';
import InputBar from './InputBar';
import { createData } from './helper';

const defaultRows = [
  createData('Cupcake', 1, 'OPEN', 'blog', 4.3),
  createData('Donut', 2, 'OPEN', 'go', 4.9),
  createData('Eclair', 1, 'OPEN', 'go', 6.0),
  createData('Frozen yoghurt', 2, 'OPEN', 'life', 4.0),
  createData('Gingerbread', 1, 'OPEN', '', 3.9),
  createData('Honeycomb', 2, 'OPEN', '', 6.5),
  createData('Ice cream sandwich', 3, 'OPEN', '', 4.3),
  createData('Jelly Bean', 3, 'OPEN', '', 0.0),
  createData('KitKat', 2, 'OPEN', '', 7.0),
];

export default function TaskMain() {
  //以下這兩個要寫在TaskMain裡＠＠？
  const [rows, setRows] = useState([]);
  useEffect(() => {
    /* componentDidMount 區*/
    setRows(defaultRows);
    // return () => {
    //   /* componentWillUnmount區 */
    //   setRows([])
    // };
  }, []); //if have content, componentDidUpdate

  // 父層新增可以改變資料的地方
  const changeData = (data) => {
    setRows(data);
    console.log('changeData' + data);
  };

  // 清空資料
  const cleanData = () => {
    console.log('clean data');
    setRows([]);
  };

  return (
    <div>
      <InputBar data={rows} changefunc={changeData} />
      <SimpleTabs data={rows} changefunc={changeData} />
      <button onClick={cleanData}>清空資料</button>
    </div>
  );
}
