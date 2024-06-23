import React, {useContext } from "react";

import TabList from '../Tabs/TabList/Tab-list';
import TabCalendar from '../Tabs/TabCalendar/Tab-calendar';
import TabFavorite from '../Tabs/TabFavorite/Tab-favorite';
import TabArchive from "../Tabs/TabArchive/Tab-Archive";
import TaskFilter from '../../TaskFilter';
import {TabContext} from "../../../pages/Tasks";

const FrameTasks = ({tasks,archive,filter,setFilter,remove,edit}) => {

    let TabId = useContext(TabContext);

    let currentPage;
    switch (TabId) {
        case 1: currentPage = <TabList tasks={tasks} remove={remove} edit={edit}/>; break;
        case 2: currentPage = <TabCalendar tasks={tasks} remove={remove} edit={edit}/>; break;
        case 3: currentPage = <TabFavorite tasks={tasks} remove={remove} edit={edit}/>; break;
        case 4: currentPage = <TabArchive tasks={archive} remove={remove}/>; break;
        case 5: currentPage = <p/>; break;
        default: currentPage = <TabList tasks={tasks} remove={remove} edit={edit}/>; break;
    }
    //console.log("далее вывод тасков");
    return <div>
        <TaskFilter
        filter={filter}
        setFilter={setFilter}
      />
        {currentPage}
    </div>;
};

export default FrameTasks;