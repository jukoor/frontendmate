import './taskManager.css'
import Task from './Task'
import AddTask from './AddTask'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from './firebase'

function TaskManager() {

	const [openAddModal, setOpenAddModal] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [filteredTasks, setFilteredTasks] = useState([]);

	/* function to get all tasks from firestore in realtime */
	useEffect(() => {
		const q = query(collection(db, 'golivechecklist'), orderBy('id', 'desc'))
		onSnapshot(q, (querySnapshot) => {
			setTasks(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})))
			setFilteredTasks(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})))
		})
	}, [])
	console.log(filteredTasks);
	const test = () => {

		let mapped = tasks.filter(task => {
			return task.data.category === 'cat1';
		});

		setFilteredTasks(mapped.map(doc => ({
			id: doc.id,
			data: doc.data
		})))
	}

	const test2 = () => {

		let mapped = tasks.filter(task => {
			return task.data.category === 'cat2';
		});

		setFilteredTasks(mapped.map(doc => ({
			id: doc.id,
			data: doc.data
		})))
	}

	const test3 = () => {
		console.log("all");
		setFilteredTasks(tasks.map(doc => ({
			id: doc.id,
			data: doc.data
		})))
	}

	return (
		<div className='taskManager'>
			<header>Go Live Checklist</header>
			<div className='taskManager__container'>
				<button
					onClick={() => setOpenAddModal(true)}>
					Add task +
        </button>
				<button
					className="hide"
					onClick={() => test()}>
					Filter Cat 1
        </button>
				<button
					className="hide"
					onClick={() => test2()}>
					Filter Cat 2
        </button>
				<button
					className="hide"
					onClick={() => test3()}>
					Filter All
        </button>
				<div className='taskManager__tasks'>
					{filteredTasks.map((task) => (
						<Task
							id={task.id}
							key={task.id}
							title={task.data.title}
							description={task.data.description}
							completed={task.data.completed}
							statusid={task.data.statusid}
							deployed={task.data.deployed}
							category={task.data.category}
						/>
					))}
				</div>
			</div>

			{openAddModal &&
				<AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
			}

		</div>
	)
}

export default TaskManager
