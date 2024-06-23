import React, {useState,useContext} from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

import './adding-form.css'
import RusLocale from "../../../Api/RusLocaleDP";
import { AuthContext } from "../../../context";

const AddForm = ({active,setActive,tab,create}) => {
  let chosenDate = new Date().toISOString().slice(0, 10).replace("T", " ");
  const [task, setTask] = useState({id: Date.now(), name: '', description: '', date: chosenDate, date_start: '' });
  const {auth} = useContext(AuthContext);
  const curUser = auth.id;

  const currenTab = tab;

  const postTask = () => {

    //условия
    if (task.name === '') {
      alert("Вы не ввели название задачи!");
      return;
    }
    if (currenTab === 2 && (task.date === '')) {
      alert("Вы не ввели дату задачи!");
      return;
    }
    //объект задачи
    const NewTask = {
      ...task,
      type_task: currenTab,
      user_id: curUser,
      status_task: 1,
      date: task.date,
      date_start: chosenDate,
      date_complete: '1970-01-01'
    }

    create(NewTask);
    setTask({id: Date.now(), name: '', description: '', date: chosenDate });

    //запрос на добавление
    fetch('http://localhost:3000/taskAdd', {
      method: 'post',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(NewTask),
    });
    setActive(false);

  };

  return <div className={active ? "adding-message active" : "adding-message"}>
    <div className="content-message" onClick={() => { }}>
      <button className="message-close" onClick={() => setActive(false)}>
        <img src="close.png" alt="Закрыть" />
      </button>
      <div className="form-container">
        <p className="message-header-name">Добавление задач</p>
        <input
          value={task.name}
          onChange={e => setTask({...task, name: e.target.value})}
          placeholder="Название"
          type="text"
        />
        <textarea
          value={task.description}
          onChange={e => setTask({...task, description: e.target.value})}
          placeholder="Описание"
          rows={4}
        />
        {currenTab === 2 && 
        <div className="date-conteiner">
          <p>Выполнить до: </p>
          <DatePicker
            selected={task.date}
            onChange={(date) => setTask({ ...task, date: date.toLocaleDateString('ru-ru').split('.').reverse().join('-') })}
            dateFormat="dd/MM/yyyy"
            minDate={chosenDate}
            locale={RusLocale}
          />
        </div>
        }
        <button className="send-task" onClick={postTask}>Добавить</button>
      </div>
    </div>
  </div>;
}

export default AddForm;