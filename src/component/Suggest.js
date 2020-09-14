
import React , { useRef }from 'react';


  const Suggest=(props)=>{
    // getValue(){
    //   return this.refs.lowlevelinput.valaue;
    // }

    const handleClick = () => {
      inputRef.current.focus(); //滑鼠會跳到input的欄位
    }
    const inputRef = useRef(null);
      const randomid=Math.random().toString(16).substring(2);
      return (
       <div>
         <input 
           list={randomid}
           defaultValue={props.defaultValue}
           ref={inputRef}
           id={props.id}
           />  
          <datalist id={randomid} >
          {props.options.map((item,idx)=>
             <option value={item} key={idx}/>
           )}</datalist>
           <button onClick={handleClick}>click me</button>
       </div>
      );

  }
  
export default SuggestOpt;
//1.class Suggest extends React.Component{
//改成const SuggestOpt=(props)=>{
//2.拿掉render(){}
//3.改寫ref
