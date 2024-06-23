const EditTask = (task) => {
    fetch('http://localhost:3000/taskEdit', {
        method: 'post',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(task),
      });
}

export default EditTask;