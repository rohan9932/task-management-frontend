import { useContext } from 'react';
import { TaskContext } from "../Hooks/TaskContextProvider.jsx";

function TaskForm() {
  const { taskInput, setTaskInput } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do some work
    setTaskInput("");
  }

  return (
    <div className="px-6 py-3 border-2 bg-gray-100 border-[#f3f4f6] rounded-2xl">
      {/* Form Container */}
      <form onSubmit={handleSubmit} className="flex gap-5 w-full justify-between items-center">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          className="w-full rounded-md p-5 focus:outline-none"
          placeholder="Write a new objective"
        />
        <button
          disabled={taskInput.length === 0}
          className="bg-blue-500 text-white font-bold py-4 px-10 rounded-xl
            hover:bg-blue-600 cursor-pointer active:scale-98
            disabled:bg-gray-300 disabled:text-gray-500 disabled:scale-100 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;