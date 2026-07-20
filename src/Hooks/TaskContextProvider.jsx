import { useState, createContext } from 'react';

export const TaskContext = createContext(null);

function TaskContextProvider({ children }) {
  const [taskInput, setTaskInput] = useState("");
  const [taskDetailList, setTaskDetailList] = useState([]);

  const value = { taskInput, setTaskInput, taskDetailList, setTaskDetailList };
  return (
    <TaskContext.Provider value={value}> { children } </TaskContext.Provider>
  );
}

export default TaskContextProvider;