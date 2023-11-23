/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let [todolist, setTodolist] = useState('');
  let [text, setText] = useState('');
  let [title, setTitle] = useState('');
  let [list, setList] = useState(false);


  return (
    <div className="App">
      <div className="navbar">
        <div>Todo List</div>
      </div>  

      <Lists todolist={todolist} />

      <input placeholder='할 일' onChange={(e)=>{
        setText(e.target.value)
      }} />
      <button onClick={()=>{
        let copy = [...todolist];
        copy.unshift(text);
        setTodolist(copy);
      }}>등록</button>

    </div>
  );
}


function Lists() {
  return (
    <div className='lists'>
      <h4><input type='checkbox' /> todolist
        <button>삭제</button></h4>
      <hr />
    </div>
  )
}


export default App;
