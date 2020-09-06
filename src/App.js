import React, { useState } from "react";
// import React, React.Component from 'react';
import "./App.css";
function TodoApp() {
  const [todoList, setToDoList] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const add = (a) => {
    console.log("nvdknv"); // 新たに追加
    setToDoList(todoList.concat(a));
    setValue("");

    console.log(value);
  };

  const handleDelete = (id) => {
    let todoList0 = todoList.concat();
    let index = 0;
    todoList0.map((element, idx) => {
      if (element.id == id) {
        index = idx;
      }
    });
    todoList0.splice(index, 1);
    setToDoList(todoList0);
  };

  const todoListNode = todoList.map((element) => {
    return (
      <TodoElement
        key={element.id}
        element={element}
        onDelete={(c) => handleDelete(c)}
      />
    );
  });

  return (
    <div>
      <button onClick={() => console.log(todoList, value)}>state</button>
      <h1>TODO App</h1>
      <AddTodo
        value={value}
        onChange={(e) => onChange(e)}
        add={(b) => add(b)}
      />
      <ul>{todoListNode}</ul>
    </div>
  );
}

const TodoElement = (props) => {
  const onDelete = () => {
    props.onDelete(props.element.id);
  };

  return (
    <li>
      <span>{props.element.content}</span>
      <button onClick={() => onDelete()}>削除</button>
    </li>
  );
};

function AddTodo(props) {
  const onChange = (e) => {
    props.onChange(e);
  };

  const add = (e) => {
    e.preventDefault();
    const todoElement = {
      content: props.value,
      id: new Date().getTime(),
    };
    console.log("mdmvd");
    props.add(todoElement);
  };

  return (
    <div>
      <form onSubmit={(e) => add(e)}>
        <input type="text" value={props.value} onChange={(e) => onChange(e)} />
        <button type="submit">追加</button>
      </form>
    </div>
  );
}

export default TodoApp;
