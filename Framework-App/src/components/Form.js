import React from "react";


const Form = ( { setInputText, todos, setTodos, inputText, setStatus }) => {
    // Here There is javascript
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: inputText, completed:false, id: Math.random() * 1000 }, 
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input className="todo-input"
                type="text"
                placeholder="Add"
                value={inputText} 
                onChange={ inputTextHandler }  
            />
            <button onClick={submitTodoHandler} className="todo-botton" type="sumbit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;