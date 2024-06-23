import React, {useContext} from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

import styles from './EditForm.module.css';
import RusLocale from "../../../Api/RusLocaleDP";
import EditTask from '../../../Api/EditTask';
import {TabContext} from "../../../../pages/Tasks";

const EditForm = ({active,setActive,Task,setTask,edit}) => {
  let chosenDate = new Date().toISOString().slice(0, 10).replace("T", " ");
  const currentTab = useContext(TabContext);

  const addFormClass = styles.addingMessage;
  let addFormActive = styles.addingMessageHide;
  if (active) {
    addFormActive = styles.addingMessageShow;
  }

  const editTask = () => {
    setActive(false);
    EditTask(Task);
    edit(Task);
  }
  

  return <div className={`${addFormClass} ${addFormActive} `}>
    <div className={styles.contentMessage}>
      <button className={styles.messageClose} onClick={() => setActive(false)}>
        <img src="close.png" alt="Закрыть" />
      </button>
      <div className={styles.formContainer}>
        <p className={styles.messageHeaderName}></p>
        <input
          value={Task.name}
          onChange={e => setTask({...Task, name: e.target.value})}
          type="text"
        />
        <textarea
          value={Task.description}
          onChange={e => setTask({...Task, description: e.target.value})}
          rows={10}
        />
        {currentTab === 2 && 
        <div className={styles.dateConteiner}>
          <p>Выполнить до: </p>
          <DatePicker
            selected={Task.date}
            onChange={(date) => setTask({ ...Task, date: date.toLocaleDateString('ru-ru').split('.').reverse().join('-') })}
            dateFormat="dd/MM/yyyy"
            minDate={chosenDate}
            locale={RusLocale}
          />
        </div>
        }
        <button className={styles.sendTask} onClick={() => {editTask()}}>Изменить</button>
      </div>
    </div>
  </div>;
}

export default EditForm;