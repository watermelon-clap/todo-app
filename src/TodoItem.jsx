function TodoItem({ todo, toggleTodo, deleteTodo, darkMode }) {

    return(
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: darkMode ? "#3b3b3b" : "#e6e6e6",
            color: darkMode ? "#fff" : "#000",
            padding: "8px",
            borderBottom: darkMode ? "1px solid #474747" : "1px solid #dadada"
             
        }}
        >
            <span
            style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
            }}
            onClick={() => {toggleTodo(todo.id)}}
            >{todo.text}</span>
            <button
            style={{
                background: "transparent",
                border: "0",
                outline: "none",
                cursor: "pointer"
            }}
             onClick = {() => {deleteTodo(todo.id)}}>❌</button>
        </div>
    )

}

export default TodoItem;