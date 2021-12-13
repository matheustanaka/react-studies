import {useState, useEffect} from "react";
import axios from 'axios';
//Components
import TaskItem from "./components/TaskItem";

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      description: 'Study Elixir',
      isCompleted: false,
    },
    {
      id: '2',
      description: 'Study C++',
      isCompleted: true,
    }
  ]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [])



  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task = {task}/>
      ))}

    </>
  );
}

export default App;