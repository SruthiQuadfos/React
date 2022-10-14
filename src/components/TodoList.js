import React, { useState } from "react";


function Todolist({ toDo, setTodo }) {
  //////////////Temp state//////////////////////////
  const [updateData, setUpdateData] = useState("");

   //////////////////////complete Update/////////////////////////
   const markDone = (id) => {
    let newTasks = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTasks);
  };
  ///////// ///////////////////Delete task/////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setTodo(newTasks);
  };
 ///////////change task///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  ////////////////////////Update task/////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setTodo(updatedObject);
    setUpdateData("");
  };

  return (
    <>
      {/*////////////////////////////////////// {update task} /////////////////////////*/}
      {updateData ? (
        <div className="add ">
          <input
            type="text"
            placeholder="Enter a Todo..."
            className="task-input"
            value={updateData && updateData.title}
            required
            onChange={(e) => changeTask(e)}
          />
          <button className="button-update" type="submit" onClick={updateTask}>
            Update
          </button>
        </div>
      ) : (
        ""
      )}
      {toDo && toDo.length ? "" : "No Tasks..."}
      {toDo &&
        toDo.map((task, index) => {
          return (
            // <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={task.status ? "done" : ""}>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconWrap">
                <span title="Completed /Not Completed">
                  <button
                    className="button-complete task-button"
                    onClick={(e) => markDone(task.id)}
                  >
                    <i className="fa fa-check-square-o"></i>
                  </button>
                </span>
                {task.status ? null : (
                  <span title="edit">
                    <button
                      className="button-edit task-button"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                  </span>
                )}

                <span title="Delete">
                  <button
                    className="button-delete task-button"
                    onClick={() => deleteTask(task.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </span>
              </div>
            </div>
            // </React.Fragment>
          );
        })}
    </>
  );
}
export default Todolist;
