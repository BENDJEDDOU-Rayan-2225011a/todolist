import "./App.css";
import { useState } from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { TfiPencilAlt } from "react-icons/tfi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(item.todo);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleEdit = () => {
        if (!item.complete) {
            setIsEditing(true);
        }
    };

    const handleChange = (event) => {
        setEditedValue(event.target.value);
    };

    const handleUpdate = () => {
        updateTodoItem(index, editedValue);
        setIsEditing(false);
    };

    const displayCalendar = () => {
        if(showCalendar === false){
            setShowCalendar(true);
            console.log("showCalendar est a true");
        } else {
            setShowCalendar(false);
            console.log("showCalendar est à false");
        }

    };

    return (
        <>
            <div className="sub-items-ctn">
                <input type="checkbox" checked={item.complete} onChange={() => completeTodoItem(index)} />
                {isEditing ? (
                    <input type="text" value={editedValue} onChange={handleChange} onBlur={handleUpdate} autoFocus className="input-todo-label"/>
                ) : (
                    <p style={item.complete ? {color: '#8D918D'} : {color: 'white'}}  className={item.complete ? 'completed' : ''}>{item.todo}</p>
                )}
                <button className="btn-delete" onClick={displayCalendar}><FaRegCalendarAlt/></button>
                <button className="btn-delete" onClick={handleEdit}><TfiPencilAlt /></button>
                <button onClick={() => deleteTodoItem(index)} className="btn-delete"><IoTrashOutline /></button>
            </div>
            <div>
                {showCalendar ? (<Calendar/>) : (<p></p>)}
            </div>
        </>
    );
};

export default TodoItem;
