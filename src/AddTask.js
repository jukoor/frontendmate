import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import { db } from './firebase'
import {Timestamp, collection, addDoc} from 'firebase/firestore'

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
	const [category, setCategory] = useState('')

  /* function to add new task to firestore */
	const handleSubmit = async (e) => {
	   e.preventDefault()
	   try {
	     await addDoc(collection(db, 'tasks'), {
	       title: title,
	       description: description,
	       completed: false,
		   category: category,
		   lastEdited: Timestamp.fromDate(new Date())
	     })
	     onClose()
	   } catch (err) {
	     alert(err)
	   }
	 }
  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input
          type='text'
          name='title'
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder='Enter title'/>
					<input
	          type='text'
	          name='category'
	          onChange={(e) => setCategory(e.target.value)}
	          value={category}
	          placeholder='Enter category'/>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form>
    </Modal>
  )
}

export default AddTask
