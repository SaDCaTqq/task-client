export const SendTaskComplete = (TaskId) => {
    const id = {
        id: TaskId
    };
    fetch('http://localhost:3000/taskComplete', {
        method: 'post',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(id),
    });
}