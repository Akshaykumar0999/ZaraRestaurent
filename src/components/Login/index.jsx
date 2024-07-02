import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../store/AuthSlice'
import { setSelectedTableId } from '../../store/TableSlice'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [iserrorMsg, setErrorMsg] = useState(false)
    const {auth}=useSelector((state)=>state);
    const dispatch=useDispatch();
    
    const navigate = useNavigate()
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onSuccessSubmit = (jwt_token) => {
        localStorage.setItem("token",jwt_token);
        navigate('/')
    }

    const onFailureSubmit = errorMsg => {
        setErrorMsg(true, errorMsg)
        alert(errorMsg);
    }

    const onSumbitCredentials = async (event) => {
        event.preventDefault()
        const userDetails = { email:username, password }
        const url = 'https://resbackend.gharxpert.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers:{
                "Content-Type":"application/json"
            }
        }
        const response = await fetch(url, options)
        const fetchedData = await response.json()
        console.log(fetchedData)
        if (fetchedData.token) {
            dispatch(setUser({token:fetchedData.token,user:fetchedData.user}))
            dispatch(setSelectedTableId(0));
            onSuccessSubmit(fetchedData.token)
        } else {
            onFailureSubmit(fetchedData.message)
        }
    }
   

    return (
        <div className='Login-container'>
            <div className='restaurent-login-form-card'>
                <img src='https://img.freepik.com/premium-vector/once-bustling-cafes-restaurants-that-lined-streets-now-sat-empty-their-doors-locked_216520-142651.jpg?w=360' className='restro-image' />
                {/* <img src='https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg' className='restro-image' /> */}

                <div className='login-form-main-card'>
                    <form className='login-form-container' onSubmit={onSumbitCredentials}>
                        <h1 className='login-in-text'>Login</h1>
                        <div className='login-username-password'>
                            <label className='input-label-card' htmlFor='username-login'>Email</label>
                            <input className='input-card' type='text' id='username-login' onChange={onChangeUsername} />
                        </div>
                        <div className='login-username-password'>
                            <label className='input-label-card' htmlFor='username-password'>Password</label>
                            <input className='input-card' type='password' id='username-password' onChange={onChangePassword} />
                        </div>
                        <button type='submit' onClick={(e)=>onSumbitCredentials(e)} className='form-button' >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login