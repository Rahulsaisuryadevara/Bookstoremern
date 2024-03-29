import React, { useState } from 'react';

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  const toggleCompletion = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
