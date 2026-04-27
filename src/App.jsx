import { useState, useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import ThemeToggle from './ThemeToggle';


function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");

  //load saved todos
  // useEffect(() => {
  //   const saved = localStorage.getItem("todos");
  //   if(saved) setTodos(JSON.parse(saved));
  // }, []);

  //save todos
  useEffect(() => {
    if (todos.length > 0) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  }, [todos]);
  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const deleteTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  }

  const filteredtodos = todos.filter(todo => {
    if (filter == "active") return !todo.completed;
    if (filter == "completed") return todo.completed;
    return true;
  })

  const btnStyle = {
    border: "0",
    outline: "none",
    backgroundColor: darkMode ? "#aefff4" : "#252491",
    padding: "6px 8px",
    borderRadius: "4px",
    color: darkMode ? "#000000" : "#fff",
    margin: "0px 8px",
    cursor: "pointer"

  }

  return(
    <div style={{
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
      alignItems: "center",
      backgroundColor: darkMode ? "#1c1c1d" : "#f3f2f2"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: darkMode ? "#535353" : "#fff",
        padding: "20px",
        borderRadius: "8px"
      }}>
        <h2
        style={{
          color: darkMode ? "#fff" : "#000"
        }}
        >Todo App</h2>
        <TodoInput addTodo={addTodo}
        darkMode={darkMode}
        />
        <div>
          <button style={btnStyle} onClick={() => setFilter("all")}>All</button>
          <button style={btnStyle} onClick ={() => setFilter("active")}>Active</button>
          <button style={btnStyle} onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <TodoList 
        todos = {filteredtodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        darkMode={darkMode}
         />
         <ThemeToggle
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(prev => !prev)}
        />
      </div>
    </div>
  )
}

export default App
