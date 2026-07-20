import {useContext, useEffect, useRef} from 'react';
import { TaskContext } from "../Hooks/TaskContextProvider.jsx";

function TaskForm() {
  const { taskInput, setTaskInput, setTaskDetailList } = useContext(TaskContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // update tasksList
    setTaskDetailList((prevList) => [
      ...prevList,
      {
        id: prevList.length > 0 ? prevList[prevList.length-1].id + 1 : 1,
        title: taskInput,
        completed: false
      }
    ]);
    // clear taskInput
    setTaskInput("");
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="px-6 py-3 border-2 bg-gray-100 dark:bg-slate-800/60 border-[#f3f4f6] dark:border-slate-700/50 rounded-2xl transition-colors duration-300">
      {/* Form Container */}
      <form onSubmit={handleSubmit} className="flex gap-5 w-full justify-between items-center">
        <input
          ref={inputRef}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          className="w-full rounded-md p-5 text-slate-900 dark:text-slate-100 border border-transparent focus:outline-none transition-all duration-300"
          placeholder="Write a new objective"
        />
        <button
          disabled={taskInput.length === 0}
          className="bg-blue-500 dark:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl
            hover:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer active:scale-98
            disabled:bg-gray-300 dark:disabled:bg-slate-750 disabled:text-gray-500 dark:disabled:text-slate-500 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;