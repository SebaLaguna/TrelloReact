import React from "react";

const Task = ({ title, description, assignedTo, priority, dueDate }) => {
  return (
    <div className="box" draggable="true">
      <h3 className="title is-5">{title}</h3>
      <p>{description}</p>
      <p><strong>Asignado a:</strong> {assignedTo}</p>
      <p><strong>Prioridad:</strong> {priority}</p>
      <p><strong>Fecha límite:</strong> {dueDate}</p>
      <div className="task-actions">
        <button className="button is-info">Edit</button>
        <button className="button is-danger">Delete</button>
      </div>
    </div>
  );
};

export default Task;
