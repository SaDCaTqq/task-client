import React, {useState,useEffect,useContext} from 'react';
import styles from './styles/Auth.module.css';
import {Navigate, useNavigate} from 'react-router-dom';
import TaskService from '../components/Api/TaskService';
import { AuthContext } from '../components/context';


const Auth = () => {
    const [user,setUser] = useState({login: '', password: ''});
    const [isAuth,setIsAuth] = useState(false);
    const {auth,setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetchUsers();
    }, [])
      async function fetchUsers() {
        return await TaskService.getAllUsers();
    }

    async function LogIn() {
        if (user.login === '') {
            alert("Вы не ввели логин!");
            return;
        }
        if (user.password === '') {
            alert("Вы не ввели пароль!");
            return;
        }

        let UsersObg = await fetchUsers();

        setAuth(UsersObg.find((u) => (u.login === user.login && u.password === user.password)));

        setIsAuth(true);
    }

    return (

        <div className={styles.authPage}>
            {isAuth && (
                <Navigate to="../../Tasks" replace={false}/>
            )}
            <div className={styles.authBox}>
                <p>Вход</p>
                <div className={styles.authText}>
                    <input 
                        value={user.login}
                        onChange={e => setUser({...user, login: e.target.value})}
                        type="text" 
                        placeholder='Логин'/>
                    <input 
                        value={user.password}
                        onChange={e => setUser({...user, password: e.target.value})}
                        type='password' 
                        placeholder='Пароль'/>
                </div>
                <div className={styles.navButtons}>
                    <button className={styles.authButton} onClick={() => {LogIn()}}>Вход</button>
                    <button onClick={() => {navigate("../../Reg")}} className={styles.RegButton}>Регистрация</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;