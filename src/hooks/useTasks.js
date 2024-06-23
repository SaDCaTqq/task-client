import {useMemo} from 'react';

export const useSortedTasks = (tasks, sort) => {
    const sortedTasks = useMemo(() => {
        if (sort) {
          return [...tasks].sort((a,b) => b[sort].localeCompare(a[sort]));
        }
        return tasks;
      }, [sort, tasks])

      return sortedTasks;
}

export const useTasks = (tasks, sort, query) => {
    const sortedTasks =useSortedTasks(tasks, sort);
    console.log(sortedTasks);

    const sortAndSeaTasks = useMemo(() => {
        return sortedTasks.filter(task => task.name.toLowerCase().includes(query.toLowerCase()))
    }, [query,sortedTasks])

    return sortAndSeaTasks;
}