import React from "react";
import Task from "./Task"; // Importamos el componente Task
import "./../App.css"; 

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task 
              title={task.title} 
              description={task.description} 
              assignedTo={task.assignedTo}
              priority={task.priority}
              dueDate={task.dueDate} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskColumn;
