import React, {} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TaskFav from './TaskFav';

import styles from './favorite-page.module.css';

const TabFavorite = ({tasks, remove,edit}) => {
	return <div className={styles.tasksBox}>
    <div className={styles.tabName}>
        Избранные
    </div>
    <TransitionGroup>
        {tasks.map((task) =>
        <CSSTransition 
            key={task.id} 
            timeout={500} 
            classNames='item'>
            <TaskFav task={task} remove={remove} edit={edit}/>
        </CSSTransition>
        )}
    </TransitionGroup>
</div>
}

export default TabFavorite;