import React from "react";

import styles from './TabArchive.module.css';

const TaskArchive = ({task,remove}) => {
    if (task.status_task === 2) {
    let DateComplete = '';
    if (task.date_complete > '') {
        let LocalDate = new Date(task.date_complete).toLocaleDateString('ru-ru');
        LocalDate = LocalDate.split('/').reverse().join('-');
        DateComplete = 'Выполнено : '+LocalDate;
    }
    let DateLast = '';
    if (task.date > '') {
        let LocalDate = new Date(task.date).toLocaleDateString('ru-ru');
        LocalDate = LocalDate.split('/').reverse().join('-');
        DateLast = 'Срок : '+LocalDate;
    }
    return <div className={styles.taskBox}>
        <div className={styles.taskText}>
            <p className={styles.taskName}>
                {task.name}
            </p>
            <p className={styles.taskDesc}>
                {task.description}
            </p>
        </div>
            <div className={styles.datesContent}>
            <p className={styles.dateContent}>
                {DateLast}
            </p>
            <p className={styles.dateContent}>
                {DateComplete}
            </p>
            </div>

    </div>
    }
}

export default TaskArchive;