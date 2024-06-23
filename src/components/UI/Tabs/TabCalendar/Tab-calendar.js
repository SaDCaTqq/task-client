import React, {} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TaskCalendar from './TaskCalendar';

import styles from './TabCalendar.module.css';

const TabCalendar = ({tasks, remove, edit}) => {

    return <div className={styles.tasksBox}>
        <div className={styles.tabName}>
            Календарь задач
        </div>
        <TransitionGroup>
        {tasks.map((task) =>
        <CSSTransition 
            key={task.id} 
            timeout={500} 
            classNames='item'>
            <TaskCalendar task={task} remove={remove} edit={edit}/>
        </CSSTransition>
        )}
    </TransitionGroup>

    </div>
}

export default TabCalendar;