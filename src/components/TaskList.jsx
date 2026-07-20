import {useContext, useEffect, useState} from 'react';
import TaskCard from "./TaskCard.jsx";
import { TaskContext } from "../Hooks/TaskContextProvider.jsx";

function TaskList() {
  const { taskDetailList, setTaskDetailList } = useContext(TaskContext);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await response.json();
      setTaskDetailList(data);
      setIsLoading(false);
    }
    setTimeout(fetchData, 2000); // to visualize delay
  }, [setTaskDetailList]);

  return (
    <div>
      <div className="mt-20 flex justify-center items-center">
        <p className="font-bold text-3xl">Tasks</p>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500 font-medium animate-pulse">Loading tasks...</p>
        </div>
      ): (
        <div className="px-30 py-10">
          { taskDetailList.map((task) => <TaskCard key={task.id} task={task} />) }
        </div>
      )}
    </div>
  );
}

export default TaskList;