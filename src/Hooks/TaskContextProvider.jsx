import { useState, createContext } from 'react';

export const TaskContext = createContext(null);

function TaskContextProvider({ children }) {
  const [taskInput, setTaskInput] = useState("");
  const [taskDetailList, setTaskDetailList] = useState([
    {id: 1, title: "Task 1", completed: true},
    {id: 2, title: "Task 2", completed: false},
    {id: 3, title: "Task 3", completed: true},
    {id: 4, title: "Task 4", completed: true},
    {id: 5, title: "Task 5", completed: false},
  ]);

  const value = { taskInput, setTaskInput, taskDetailList, setTaskDetailList };
  return (
    <TaskContext.Provider value={value}> { children } </TaskContext.Provider>
  );
}

export default TaskContextProvider;