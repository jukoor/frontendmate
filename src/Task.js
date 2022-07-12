import './task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import { db } from './firebase'
import { doc, deleteDoc } from "firebase/firestore";

function Task({id, title, description, category, statusid, deployed, completed, status, statusId}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

   /* function to update document in firestore */

   /* function to delete a document from firstore */
   const handleDeleteTask = async (e) => {
    e.preventDefault()
    let result;
    await deleteDoc(doc(db, "tasks", "btPVxQPz0hV8Hh5ipd4a"));
  }

  return (
    <div className={`task ${checked && 'task--borderColor'}`} id={id}>
      <div>
        <input
          id={`checkbox-${id}`}
          className='checkbox-custom'
          name="checkbox"
          defaultChecked={completed}
          type="checkbox" />
        <label
          htmlFor={`checkbox-${id}`}
          className="checkbox-custom-label"
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <div className='task_body'>
        <div className="title_and_status">
        <h2 className="headline">{title}</h2>
        <div className={`status status_${statusId}`}>{status}</div>
        </div>
        <div className='task__buttons'>
          <div className='task__deleteNedit'>
            <button
              className='task__editButton'
              onClick={() => setOpen({...open, edit: true})}>
              Edit
            </button>
            <button onClick={handleDeleteTask} className='task__deleteButton'>Delete</button>
          </div>
          <button
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <TaskItem
          onClose={handleClose}
          title={title}
          description={description}
          open={open.view} />
      }

      {open.edit &&
        <EditTask
          onClose={handleClose}
          toEditTitle={title}
          toEditDescription={description}
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Task