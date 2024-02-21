import React, {useState} from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");

    const handleInput = (event) => {
        setTodo(event.target.value);
    }

    const handleList = (event) => {
        setTodoList((prevState) => [...prevState, todo]);
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} value={todo} name={"text"} type="text" />
        <button onClick={handleList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {todoList.map((todo) => (<li>{todo}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
