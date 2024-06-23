import React from 'react';
import MySelect from './UI/Select/MySelect';
import SearchInput from './UI/MyInput/SearchInput';


const TaskFilter = ({filter, setFilter}) => {
    return (
        <div>
            <SearchInput
        valueSearch={filter.query}
        onChange={e => setFilter({...filter,query: e.target.value})}
        placeholder='Поиск'
        setFilter={setFilter}
        filter={filter}
        />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
        defaultVal="Сортировка по"
        options={[
          {value: 'name', name: 'По названию'},
          {value: 'description', name: 'по описанию'},
          {value: 'date_start', name: 'по дате добавления'},
          {value: 'date_complete', name: 'по дате выполнения'},
          {value: 'date', name: 'по сроку выполнения'}
        ]}
        />
        </div>
    );
};

export default TaskFilter;