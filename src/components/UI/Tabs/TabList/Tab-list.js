import React, {useState} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TaskList from './TaskList';

import styles from './TabList.module.css';


const TabList = ({tasks, remove, edit}) => {

    return <div className={styles.tasksBox}>
        <div className={styles.tabName}>
            Список задач
        </div>
        <TransitionGroup>
            {tasks.map((task) =>
            <CSSTransition 
                key={task.id} 
                timeout={500} 
                classNames='item'>
                <TaskList 
                    task={task} 
                    remove={remove} 
                    edit={edit}
                />
            </CSSTransition>)}
        </TransitionGroup>
    </div>
}


export default TabList;