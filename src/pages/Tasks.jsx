import React, { createContext, useEffect, useState, useContext } from "react";

import {useTasks} from '../hooks/useTasks';
import TaskService from "../components/Api/TaskService";
import {SendTaskComplete} from '../components/Api/CompleteTask';

import '../styles/index.css';

import FrameTasks from "../components/UI/FrameTasks/FrameTasks";
import AddForm from "../components/UI/Popups/AddForm/AddForm";
import { AuthContext } from "../components/context";

export const TabContext = createContext(1);

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [archive, setArchive] = useState([]);
  const [tab, setTab] = useState(1);
  const [AddFormActive,setAddFormActive] = useState(false);
  const {auth} = useContext(AuthContext);

  const currentProfile =auth.name;

  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedAndSearchedTasks = useTasks(tasks, filter.sort, filter.query)
  const sortedAndSearchedArchive = useTasks(archive, filter.sort, filter.query)

  async function fetchTasks() {
    //user.id
    const tasks = await TaskService.getAllTasks(auth.id) 
    setTasks(tasks)
  }
  async function fetchArchive() {
    const archive = await TaskService.getAllArchive(auth.id) 
    setArchive(archive)
  }

  useEffect(() => {
    fetchTasks();
    fetchArchive();
  }, [])
  useEffect(() => {
    fetchArchive();
  }, [tasks])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const editTask = (Task) => {
    const newTasks = tasks.map((task) => {
      if (Task.id === task.id) {
        task.name = Task.name;
        task.description = Task.description;
        task.date = Task.date;
        return task;
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
    SendTaskComplete(task.id);
  }

  let tabList = document.getElementById('tabListC');
  let tabCal = document.getElementById('tabCalendarC');
  let tabFav = document.getElementById('tabFavC');
  let tabArch = document.getElementById('tabArchC');
  const OpenList = () => {
    setTab(1);
    tabList.style.background = 'lightblue';
    tabCal.style.background = 'whitesmoke';
    tabFav.style.background = 'whitesmoke';
    tabArch.style.background = 'whitesmoke';
  }
  const OpenCalendar = () => {
    setTab(2);
    tabList.style.background = 'whitesmoke';
    tabCal.style.background = 'lightblue';
    tabFav.style.background = 'whitesmoke';
    tabArch.style.background = 'whitesmoke';
  }
  const OpenFavorite = () => {
    setTab(3);
    tabList.style.background = 'whitesmoke';
    tabCal.style.background = 'whitesmoke';
    tabFav.style.background = 'lightblue';
    tabArch.style.background = 'whitesmoke';
  }
  const OpenArchive = () => {
    setTab(4);
    tabList.style.background = 'whitesmoke';
    tabCal.style.background = 'whitesmoke';
    tabFav.style.background = 'whitesmoke';
    tabArch.style.background = 'lightblue';
  }

  return <div>
      <header>
        <div className="main-Img">
          <img src="/test.png" alt="ошибка изображения"/>
          <div className="main-Name">
            Задачник
          </div>    
        </div>
        <div className='container-profile'>
          <img src="../pictures/icon-user.png" alt="" />
          <p>
            Добрый день, {currentProfile}
          </p>
        </div>
      </header>
      <div className='container-main'>
      <TabContext.Provider value={tab}>
        <div className='container-sidebar'>
          <ul>
            {tab !== 4 &&
              <li className='container-tab show-form'>
                <button className="button-show-form" onClick={() => setAddFormActive(true)}>
                  <img src="/add.png" alt="Добавить" id="adding-img" />
                  <p>Добавление задач</p>
                </button>
              </li>
            } 
            <li className='container-tab' id='tabListC'>
              <button onClick={OpenList} className='buttonList'>
              <img src="/tab-img/list-tab.png" alt="" />
                <p>Список задач</p>
                
                </button>
            </li>
            <li className='container-tab' id='tabCalendarC'>
              <button onClick={OpenCalendar} className='buttonCalendar'>
              <img src="/tab-img/calendar-tab.png" alt="" />
                <p>Календарь задач</p>
                </button>
            </li>
            <li className='container-tab' id='tabFavC'>
              <button onClick={OpenFavorite} className='buttonFavorite'>
              <img src="/tab-img/favorite-tab.png" alt="" />
                <p>Избранные</p>
                </button>
            </li>
            <li className='container-tab' id='tabArchC'>
              <button onClick={OpenArchive} className='buttonFavorite'>
              <img src="/tab-img/archive-tab.png" alt="" />
                <p>Архив</p>
                </button>
            </li>
          </ul>
        </div>

        <div id="container-display">
          <FrameTasks 
          filter={filter}  
          setFilter={setFilter}
          tasks={sortedAndSearchedTasks} 
          archive={sortedAndSearchedArchive} 
          remove={removeTask}
          edit={editTask}
          />
        </div>
      </TabContext.Provider>
    </div>
      <AddForm 
        active={AddFormActive}
        setActive={setAddFormActive} 
        tab={tab} 
        create={createTask}
      />
  </div>;
};

export default Tasks;