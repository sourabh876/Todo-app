import React, { useState } from "react";
import delicon from "./assets/delete.svg";

function App() {
  const [showtodos, setshowtodos] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filteredtodos, setfilteredtodos] = useState([]);
  const [todotext, settodotext] = useState("");
  const [removetodo, setremovetodo] = useState([""]);
  const handlesubmit = () => {
    if (todotext.trim() !== "") {
      setTodos([...todos, todotext]); // Add todo to the list
      settodotext(""); // Clear input after submission
      setshowtodos(true);
    }
  };

  const handleInputChange = (e) => {
    settodotext(e.target.value);
  };

  const deletetodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };
  const searchtodo = (e) => {
    const searchtext = e.target.value.toLowerCase();
    if (searchtodo === "") {
      setfilteredtodos([...todos]);
    }

    const filteredtodos = todos.filter((todo) =>
      todo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTodos(filteredtodos);
  };

  return (
    <div className="bg-slate-900 flex justify-center min-h-screen">
      <div className="outerlayer h-auto bg-cyan-950 w-full max-w-screen-md m-3 p-4 md:p-6 rounded-md">
        <div className="header flex justify-center h-30">
          <span className="relative top-4 md:top-6 text-white text-3xl md:text-4xl h-fit text-center">
            Todo List
          </span>
        </div>
        <div className="input h-15 flex justify-center mt-4">
          <input
            onChange={searchtodo}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchtodo(e);
              }
            }}
            className="bg-cyan-900 placeholder-white focus:outline-none p-2 h-8 w-full max-w-sm rounded-sm"
            type="text"
            placeholder="Search Todos"
          />
        </div>
        <div className="tododisplay flex justify-center mt-6 overflow-auto max-h-64 sm:max-h-80">
          {removetodo && (
            <div className="todotexts w-full">
              {todos.map((todo, index) => (
                <div
                  key={index}
                  className="todoslist bg-cyan-900 w-full h-auto mb-2 p-2 text-white flex justify-between items-center rounded-md"
                >
                  <p className="todotext flex-grow line-clamp-2 sm:w-[30ch] md:w-[50ch] lg:w-[60ch]">
                    {todo}
                  </p>
                  <button onClick={() => deletetodo(index)}>
                    <img src={delicon} alt="Delete" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="addtodo h-20 grid justify-center mt-6">
          <span className="text-white text-xl md:text-2xl mb-2">
            Add a new todo...
          </span>
          <input
            className="addtodo bg-cyan-900 h-10 rounded-sm p-2 w-full max-w-sm focus:outline-none"
            type="text"
            value={todotext}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlesubmit();
              }
            }}
          />
        </div>
        <div className="button h-20 flex justify-center">
          <button
            onClick={handlesubmit}
            className="bg-white h-10 w-24 md:w-28 rounded-md mt-4 hover:bg-gray-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
