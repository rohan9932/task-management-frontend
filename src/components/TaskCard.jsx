import { useContext } from "react";
import { TaskContext } from "../Hooks/TaskContextProvider.jsx";


function TaskCard({ task }) {
  const { setTaskDetailList } = useContext(TaskContext);

  return (
    <div className="flex items-center gap-5 border bg-gray-200 border-[#f3f4f6] rounded-xl my-5 px-10 py-5">
      {/*Checkbox*/}
      <input
        type="checkbox"
        checked={task.completed}
        onClick={() => {
          setTaskDetailList((prevList) =>
            prevList.map((item) =>
              item.id === task.id ? { ...item, completed: !item.completed } : item
            )
          );
        }}
        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:outline-none"
      />
      <p className={`${task.completed ? "line-through": ""}`}>{task.title}</p>
    </div>
  );
}

export default TaskCard;