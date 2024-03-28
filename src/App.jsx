import React from 'react';
import TodoInput from "./TodoInput.jsx";
import TodoItem from "./TodoItem.jsx";
import './App.css'

function App() {

    const [todoItems, setTodoItems] = React.useState([]
    )

    const createTodoitem = (todo) => {
        const newTodoItems = [...todoItems, {todo, complete: false}];
        setTodoItems(newTodoItems);
    };

    const deleteTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
    }

    const completeTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].complete === false ? (newTodoItems[index].complete = true) : (newTodoItems[index].complete = false);
        setTodoItems(newTodoItems);
    }

    const updateTodoItem = (index, newTodo) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].todo = newTodo;
        setTodoItems(newTodoItems);
    };

    return (
    <>
      <div className="App">
          <TodoInput createTodoItem={createTodoitem}/>
          {todoItems.map((item, index) => (<TodoItem key={index} index={index} item={item} deleteTodoItem={deleteTodoItem} completeTodoItem={completeTodoItem} updateTodoItem={updateTodoItem} />))}
      </div>
    </>
    );
}

export default App
