import Navbar from "../components/Navbar.jsx";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";
import TaskContextProvider from "../Hooks/TaskContextProvider.jsx";

function Home() {
  return (
    <div className="mx-70">
      <TaskContextProvider>
        <Navbar />
        <div className="px-50 py-30">
          <TaskForm />
          <TaskList />
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default Home;