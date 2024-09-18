import React, { useState } from "react";
import TaskColumn from "./TaskColumn";
import TaskModal from "./TaskModal";
import "./../App.css";


const TaskManager = () => {
    const [tasksBacklog, setTasksBacklog] = useState([
        { id: 1, title: "Backlog Task 1", description: "This is a backlog task." }
      ]);
      
      const [tasksToDo, setTasksToDo] = useState([
        { id: 2, title: "To Do Task 1", description: "This is a task to do." }
      ]);
      
      const [tasksInProgress, setTasksInProgress] = useState([
        { id: 3, title: "In Progress Task 1", description: "This task is in progress." }
      ]);
      
      const [tasksDone, setTasksDone] = useState([
        { id: 4, title: "Done Task 1", description: "This task is completed." }
      ]);
      
      const [tasksBlocked, setTasksBlocked] = useState([
        { id: 5, title: "Blocked Task 1", description: "This task is blocked." }
      ]);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="task-manager">
    <h1 className="task-manager-title">Task Manager</h1>
      <button className="add-task-btn" onClick={toggleModal}>Add Task</button>
      <div className="columns">
        <TaskColumn title="Backlog" tasks={tasksBacklog} />
        <TaskColumn title="To Do" tasks={tasksToDo} />
        <TaskColumn title="In Progress" tasks={tasksInProgress} />
        <TaskColumn title="Done" tasks={tasksDone} />
        <TaskColumn title="Blocked" tasks={tasksBlocked} />
      </div>
      {showModal && <TaskModal addTask={addTask} closeModal={toggleModal} />}
    </div>
  );
};

export default TaskManager;
