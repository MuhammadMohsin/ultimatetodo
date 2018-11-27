/**
 * Keeping all components in a single file to make it simplest
 */

import React, { Component } from "react";

class TodoList extends Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}

class TodoListItem extends Component {
  onClickClose = () => {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  };
  onClickDone = () => {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  };
  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

class TodoForm extends Component {
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit = event => {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  };
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref="itemName"
          className="form-control"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-danger">
          Add
        </button>
      </form>
    );
  }
}

class TodoHeader extends Component {
  render() {
    return <h1>My Todo List</h1>;
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: props.initItems };
  }

  addItem = todoItem => {
    let { todoItems } = this.state;

    todoItems.push({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  };
  removeItem = itemIndex => {
    let { todoItems } = this.state;

    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  };
  markTodoDone = itemIndex => {
    let { todoItems } = this.state;

    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  };
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList
          items={this.props.initItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;
