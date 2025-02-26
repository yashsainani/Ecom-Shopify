import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();
    const chkRef = useRef();
    const [fillErr, setFillErr] = useState(false);
    const [accountErr, setAccountErr] = useState(false);
    const navigate = useNavigate();

    const loginFn = () => {
        const email = emailRef.current.value;
        const password = passRef.current.value;

        if (email && password) {
            setAccountErr(false);
            setFillErr(false);
            const userDetails = JSON.parse(localStorage.getItem('userDetails'));
            if (userDetails !== null) {
                if (email === userDetails.userEmail && password === userDetails.userPassword) navigate('/home');
                else setFillErr(true);
            }
            else setAccountErr(true)
        }
        else setFillErr(true);

    };

    const createFn = () => {
        const email = emailRef.current.value;
        const password = passRef.current.value;

        console.log(email, password, chkRef.current.checked);

        if (email && password) {
            setFillErr(false);
            setAccountErr(false)
            if (chkRef.current.checked) {
                const obj = {
                    userEmail: email,
                    userPassword: password
                }
                localStorage.setItem('userDetails', JSON.stringify(obj));
            }
            navigate('/home');
        }
        else setFillErr(true);
    };


    return (
        <section className={styles['login-page']}>
            <div className={styles['login-form']}>
                <h1>Welcome To The Pretty Login</h1>
                <h2>It's great to have you</h2>
                <form>
                    <div className={styles.input}>
                        <label htmlFor="email">Email:</label>
                        <input ref={emailRef} type="email" id='email' placeholder='Enter Your Email' required />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">Password:</label>
                        <input ref={passRef} type="password" id='password' placeholder='Enter Your Password' required />
                    </div>
                    <p style={{ display: fillErr ? 'block' : 'none' }}>FILL EMAIL AND PASSWORD BOTH CORRECTLY</p>
                    <p style={{ display: accountErr ? 'block' : 'none' }}>YOU DON'T HAVE ANY ACCOUNT FIRST CREATE AN ACCOUNT</p>
                    <div className={styles.extra}>
                        <div className={styles.remember}>
                            <input ref={chkRef} type="checkbox" id='remember' checked />
                            <label htmlFor="remember">Remember</label>
                        </div>
                        <span>Forgot Password?</span>
                    </div>
                    <div className={styles.btns}>
                        <button type='button' onClick={loginFn} className={styles.btn}>Login</button>
                        <button type='button' onClick={createFn} className={styles.btn}>Create Account</button>
                    </div>
                </form>
                <p>Or login with</p>
                <span>Facebook &nbsp;Google</span>
            </div>
            <img src="https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nZ3klMjBmb3Jlc3R8ZW58MHx8MHx8&w=1000&q=80" alt="bg-image" />
        </section>
    );
};

export default Login;