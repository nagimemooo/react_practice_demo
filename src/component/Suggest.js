import React from 'react';

class Suggest extends React.Component{
  
    getValue(){
      return this.refs.lowlevelinput.valaue;
    }
    render(){
      const randomid=Math.random().toString(16).substring(2);
      return (
       <div>
         <input 
           list={randomid}
           defaultValue={this.props.defaultValue}
           ref='lowlevelinput'
           id={this.props.id}
           />  
          <datalist id={randomid} >
          {this.props.options.map((item,idx)=>
             <option value={item} key={idx}/>
           )}</datalist>
       </div>
      );
    }
  }
  export default Suggest;
  // ReactDOM.render(
  //   <div>
  //     <Suggest options={['esd','feff','fsf','fdsg','ghg']}/>
  //   </div>,
  //   document.getElementById('app')
  // );