import { useContext } from "react";
import { TaskContext } from "../Hooks/TaskContextProvider.jsx";


function TaskCard({ task }) {
  const { setTaskDetailList } = useContext(TaskContext);

  return (
    <div className="flex items-center gap-5 border bg-gray-200 dark:bg-slate-800 border-[#f3f4f6] dark:border-slate-700/60 rounded-xl my-5 px-10 py-5 transition-colors duration-300 shadow-sm">
      {/*Checkbox*/}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {
          setTaskDetailList((prevList) =>
            prevList.map((item) =>
              item.id === task.id ? { ...item, completed: !item.completed } : item
            )
          );
        }}
        className="w-5 h-5 rounded border-gray-300 dark:border-slate-650 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-900 cursor-pointer accent-indigo-600"
      />
      <p className={`${task.completed ? "line-through text-gray-400 dark:text-slate-500" : "text-gray-800 dark:text-slate-200"} font-medium transition-all duration-200`}>
        {task.title}
      </p>
    </div>
  );
}

export default TaskCard;