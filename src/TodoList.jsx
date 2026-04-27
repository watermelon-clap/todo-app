import TodoItem from './TodoItem'

function TodoList ({todos, toggleTodo, deleteTodo, darkMode}) {

    return (
        <div>
            {todos.map(todo =>(
                <TodoItem 
                key = {todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                darkMode={darkMode}
                 />
            ))}
        </div>
    )
}

export default TodoList;