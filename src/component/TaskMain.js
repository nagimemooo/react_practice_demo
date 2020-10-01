import React, { useState, useEffect } from 'react';
import SimpleTabs from './SimpleTabs';
import InputBar from './InputBar';
import { createData, statusList } from './helper';
import * as R from 'ramda';
const defaultRows = [
  createData('Cupcake', 1, statusList.Open, 'blog', 4.3),
  createData('Donut', 2, statusList.InProgress, 'go', 4.9),
  createData('Eclair', 1, statusList.Open, 'go', 6.0),
  createData('Frozen yoghurt', 2, statusList.Open, 'life', 4.0),
  createData('Cupcake', 1, statusList.Open, '', 3.9),
  createData('Honeycomb', 2, statusList.Open, '', 6.5),
  createData('Ice cream sandwich', 3, statusList.Open, '', 4.3),
  createData('Jelly Bean', 3, statusList.Done, '', 0.0),
  createData('KitKat', 2, statusList.Open, '', 7.0),
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
  const Data = () => {
    console.log(' data');
    console.log(rows);
    var s = R.filter(R.propEq('name', 'Cupcake'), rows);
    console.log(s);
  };

  return (
    <div>
      <InputBar data={rows} changefunc={changeData} />
      <SimpleTabs data={rows} changefunc={changeData} />
      <button onClick={Data}>資料</button>
      <button onClick={cleanData}>清空資料</button>
    </div>
  );
}
