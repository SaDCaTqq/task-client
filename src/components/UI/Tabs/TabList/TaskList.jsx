import React,{useState} from "react";

import styles from './TabList.module.css';
import EditForm from '../../Popups/EditForm/EditForm';

const TaskList = ({ task, remove, edit }) => {
    const [Task, setTask] = useState({id:task.id,name:task.name,description:task.description});
    const [formActive,setFormActive] = useState(false);

    if (task.type_task === 1 && task.status_task === 1) {

        const editTask = () => {
            setFormActive(true)
        }

        return <div className={styles.taskBox} >
            <input type="checkbox"
                onClick={() => remove(task)} 
            />
            <div className={styles.taskText}
                onClick={() => { editTask() }}>
                <p className={styles.taskName}>
                    {task.name}
                </p>
                <p className={styles.taskDesc}>
                    {task.description}
                </p>
            </div>
            <EditForm
                active={formActive}
                setActive={setFormActive}
                Task={Task}
                setTask={setTask}
                edit={edit}
            />
        </div>
    }
}

export default TaskList;