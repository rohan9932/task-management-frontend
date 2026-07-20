import { useContext } from 'react';
import TaskCard from "./TaskCard.jsx";
import {TaskContext} from "../Hooks/TaskContextProvider.jsx";

function TaskList() {
  const { taskDetailList, setTaskDetailList } = useContext(TaskContext);

  return (
    <div>
      <div className="mt-20 flex justify-center items-center">
        <p className="font-bold text-3xl">Tasks</p>
      </div>
      <div className="px-30 py-10">
        { taskDetailList.map((task) => <TaskCard key={task.id} task={task} />) }
      </div>
    </div>
  );
}

export default TaskList;