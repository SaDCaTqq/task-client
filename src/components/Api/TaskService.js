import axios from "axios";

export default class TaskService {
    static async getAllTasks(userId) {
        const res = await axios.get('http://localhost:3000/tasks',{params:{user_id:userId}});
        return res.data
    }
    static async getAllArchive(userId) {
        const res = await axios.get('http://localhost:3000/tasksArchive',{params:{user_id:userId}});
        return res.data
    }
    static async getAllUsers() {
        const res = await axios.get('http://localhost:3000/Users');
        return res.data;
    }
}