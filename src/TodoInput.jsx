import { useState } from "react";

function TodoInput ({ addTodo, darkMode }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if(!text.trim()) return;
        addTodo(text);
        setText("");
    }

    return(
        <div>
            <input 
            value={text}
            onChange = {(e) => setText(e.target.value)}
            placeholder="Add a task"
            style={{
                padding: "8px 10px",
                marginRight: "4px",
                // border: "0",
                outline: "none"
            }}
            />
            <button
            style={{
                padding: "8px 10px",
                backgroundColor: darkMode ? "#fff" : "#0d931f",
                color: darkMode ? "#000" : "#fff",
                border: darkMode ? "2px solid #fff" : "2px solid #0d931f",
                outline: "none",
                border: "0",
                cursor: "pointer"
            }}
             onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TodoInput