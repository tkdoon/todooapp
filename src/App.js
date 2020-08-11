import React, { Component } from 'react';
// import React, React.Component from 'react';
import logo from './logo.svg';
import './App.css';

class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      value: "",
    }
  }

  onChange(e) {
    this.setState({ value: e.target.value })
    console.log(e.target.value)
  }

  add(a) {
    console.log("nvdknv")　　　// 新たに追加
    this.setState({
      todoList: this.state.todoList.concat(a),
      value: ""
    })
    console.log(this.state.value);
  }

  handleDelete(id) {
    let todoList = this.state.todoList.concat()
    let index = 0
    todoList.map((element, idx) => {
      if (element.id == id) {
        index = idx
      }
    })
    todoList.splice(index, 1)
    this.setState({ todoList: todoList })
  }

  render() {
    const todoListNode = this.state.todoList.map((element) => {
      return (
        <TodoElement
          key={element.id}
          element={element}
          onDelete={(c) => this.handleDelete(c)}
        />
      )
    })

    return (
      <div>
        <button onClick={() => console.log(this.state)}>state</button>
        <h1>TODO App</h1>
        <AddTodo
          {...this.state}
          onChange={e => this.onChange(e)}
          add={(b) => this.add(b)}
        />
        <ul>
          {todoListNode}
        </ul>
      </div>
    );
  }
}


class TodoElement extends Component {
  onDelete() {
    this.props.onDelete(this.props.element.id)
  }
  render() {
    return (
      <li>
        <span>{this.props.element.content}</span>
        <button onClick={() => this.onDelete()}>削除</button>
      </li>
    )
  }
}

class AddTodo extends Component {
  onChange(e) {
    this.props.onChange(e)
  }

  add(e) {
    e.preventDefault()
    const todoElement = {
      content: this.props.value,
      id: new Date().getTime(),
    }
    console.log("mdmvd")
    this.props.add(todoElement)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.add(e)}>
          <input
            type="text"
            value={this.props.value}
            onChange={e => this.onChange(e)}
          />
          <button type="submit">追加</button>
        </form>
      </div>
    )
  }
}




export default TodoApp;
