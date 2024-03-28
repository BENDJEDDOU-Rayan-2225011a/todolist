import React from 'react'
import { IoBackspace } from "react-icons/io5";
const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value === "") {
            return console.log("Veuillez entrez quelque chose !");
        }
        createTodoItem(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <button onClick={handleSubmit} className="button-input">+</button>
            <input type="text" placeholder="Quoi de neuf ?" value={value} onChange={(e) => setValue(e.target.value)}/>
        </form>
    )}
export default TodoInput
