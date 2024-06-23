import React,{useState} from "react";

import styles from './TabCalendar.module.css';
import EditForm from '../../Popups/EditForm/EditForm';

const TaskCalendar = ({ task, remove, edit }) => {
    const [Task, setTask] = useState(
        {
            id: task.id,
            type_task: task.type_task,
            name: task.name,
            description: task.description,
            date: new Date(task.date).toLocaleDateString('ru-ru').split('.').reverse().join('-'),
            date_start: task.date_start
        });
    const [formActive,setFormActive] = useState(false);
    if (task.type_task === 2 && task.status_task === 1) {
        const Today = new Date();
        const taskBoxClass = styles.taskBox;
        let taskBoxColor = styles.taskBoxPassed;
        if (new Date(task.date) >= new Date(Today.getFullYear(),Today.getMonth(),Today.getDate())) {
            taskBoxColor = styles.taskBoxUntil;
        }
        const editTask = () => {
            setFormActive(true)
        }


        return <div className={`${taskBoxClass} ${taskBoxColor} `}>
            <input type="checkbox"
                onClick={() => remove(task)} 
            />
            <div className={styles.taskText} onClick={() => { editTask() }}>
                <p className={styles.taskName}>
                    {task.name}
                </p>
                <p className={styles.taskDesc}>
                    {task.description}
                </p>
                <div className={styles.datesContent}>
                <p>
                    С:  {new Date(task.date_start).toLocaleDateString('ru-ru').split('/').join('-')}
                </p>
                <p>
                    До: {new Date(task.date).toLocaleDateString('ru-ru').split('/').reverse().join('-')}
                </p>
                </div>
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
export default TaskCalendar;