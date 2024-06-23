import React, {useState,useEffect} from 'react';
import styles from './styles/Reg.module.css';
import {useNavigate} from 'react-router-dom';

const Auth = () => {
    const [user,setUser] = useState({login: '', password: '', name: ''});
    const navigate = useNavigate();

    const CreateNewUser = () => {
        if (user.login === '') {
            alert("Вы не ввели логин!");
            return;
        }
        if (user.password === '') {
            alert("Вы не ввели пароль!");
            return;
        }
        if (user.name === '') {
            alert("Вы не ввели имя пользователя!");
            return;
        }
        fetch('http://localhost:3000/userAdd', {
            method: 'post',
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
          });
        
        navigate("../../Auth");
    }

    return (
        <div className={styles.authPage}>

            <div className={styles.authBox}>
                <p>Регистрация</p>
                <div className={styles.authText}>
                    <input 
                        value={user.login}
                        onChange={e => setUser({...user, login: e.target.value})}
                        type="text" 
                        placeholder='Логин'/>
                    <input 
                        value={user.password}
                        onChange={e => setUser({...user, password: e.target.value})}
                        type='text' 
                        placeholder='Пароль'/>
                    <input 
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                    type='text' 
                    placeholder='имя пользователя'/>
                </div>
                <div className={styles.navButtons}>
                    <button className={styles.regButton} onClick={CreateNewUser}>Регистрация</button>
                </div>
            </div>
        </div>
    );
};

export default Auth;