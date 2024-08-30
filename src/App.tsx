import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { ShowTask } from "./components/ShowTask/ShowTask";
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = () => {
      const storedTasks: string[] = [];

      Object.keys(localStorage).forEach((key) => {
        const task = localStorage.getItem(key);
        if (task) {
          storedTasks.push(task);
        }
      });
      setTasks(storedTasks);
    };

    loadTasks();
  }, []);

  const addTask = (task: string) => {
    const newTasks: string[] = [...tasks, task];

    setTasks(newTasks);
    localStorage.setItem(`task-${new Date().getTime()}`, task);
  };

  const removeTask = (task: string) => {
    const taskKey = Object.keys(localStorage).find((key) =>
      localStorage.getItem(key)
    );
    if (!taskKey) {
      return;
    }
    localStorage.removeItem(taskKey);
    setTasks((prevTask) => prevTask.filter((t) => t !== task));
  };

  return (
    <ChakraProvider colorModeManager={cookieStorageManager}>
      <Header />
      <Form addTask={addTask} />
      <ShowTask tasks={tasks} removeTasks={removeTask} />
    </ChakraProvider>
  );
}

export default App;
