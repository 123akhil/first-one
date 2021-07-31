import "./App.css";
import Header from "./Header";
import React, { useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";
// BEM - BLock Element Modifier

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Akhil");
  const [lastName, setLastName] = useState("Chaudhary");
  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const [count, setCount] = useState(0); //using state for variables
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="app">
      <Header />
      <h1 className="app__title">This is my counter app</h1>
      <p>The Count is:{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>My TODO List</h2>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={addTodo}>
          ADD TODO
        </button>
      </form>
      <h3>List Of TODO</h3>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <center>
        <h1>The Joke Generator</h1>

        <h2>{joke}</h2>
        <form>
          <input placeholder="firstName" ref={firstNameRef} />
          <input placeholder="lastName" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate joke</button>
        </form>
        {/* <button onClick={generateJoke}>Generate joke</button> */}
      </center>
    </div>
  );
}

export default App;
