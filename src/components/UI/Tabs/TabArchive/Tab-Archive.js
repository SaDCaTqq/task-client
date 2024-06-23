import React, {} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TaskArchive from './TaskArchive';

import styles from './TabArchive.module.css';

const TabArchive = ({tasks, remove}) => {

    return <div className={styles.tasksBox}>
        <div className={styles.tabName}>
            Архив задач
        </div>
        <TransitionGroup>
            {tasks.map((task) =>
            <CSSTransition 
                key={task.id} 
                timeout={500} 
                classNames='item'>
                <TaskArchive task={task} remove={remove}/>
            </CSSTransition>
            )}
        </TransitionGroup>
    </div>
}


export default TabArchive;