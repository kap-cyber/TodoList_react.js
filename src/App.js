// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';
import './css/todo.css';

function App() {
  const [addActivity,setAddActivity]=useState("");
  const [input,setInput]=useState([]);
  const add=()=>{
    // setInput([...input,addActivity])
    // console.log(input)
    setInput((Input)=>{
       const updatedInput=[...input,addActivity]
       setAddActivity("")
       console.log(updatedInput)
       return updatedInput;
    })
  }
  function remove(i) {
    const updatedInputData = input.filter((element,id)=>{
      return i!==id;
    }) ;
    setInput(updatedInputData)
  }
  function removeAll(){
    setInput([])
  }

  
  return (
   <>
   <div className='container'>
   <div className='todo'>TODO List</div>
   <input className='inp' type="text" value={addActivity} onChange={(event)=>setAddActivity(event.target.value)} />
   <button className='btn' onClick={add}>Add</button>
   <p className='pa1'>Here is Your List {":--"}</p>
   {input!==[] && input.map((data,i)=>{
       return(
        <>
        <p className='inp1' key={i}>
          <div className='pa' >{data}</div>
      <div>< button  className='btn1' onClick={()=>{remove(i)}}>remove( - )</button></div>
        </p>
        
        </>
       )
   })}
   {input.length>=1 &&   <button className='btn2' onClick={removeAll}>Remove All</button>}
   </div>
   </>
  );
}

export default App;
