import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import '../../public/css/form.css'

const Form = (props) => {



    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPw, setConfirmPw] = useState('')
    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState(false)
    const [showPwd, setShow] = useState(false)

    const { changeState } = props

    let history = useHistory()


    const handleLogin = (e) => {

        console.log(username, password)
        if (username === "" || password === "")
            return
        let promise = changeState.login(username)
            .then(
                history.push(`/`)
            )

    }
    const handleChangeUname = (e) => {
        let input = e.target.value
        setUsername(input)
    }
    const handleChangePwd = (e) => {
        let input = e.target.value
        setPassword(input)
    }

    const handleClickShowPassword = () => {
        setShow(!showPwd)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeConfirmPwd = (event) => {
        let input = event.target.value
        setConfirmPw(input)
    }
    const handlePhone = event => {
        let input = event.target.value
        setPhone(input)
        let check = /[^0-9]/
        if (check.test(input) || input.length < 10 || input.length > 13) {
            setValidPhone(false)
        } else {
            setValidPhone(true)
        }
    }
    return (

        <div >
            <Link className="link-home" to="/" >
                <Button
                    variant="contained"
                    htmlColor="gray"
                    className="btn"
                    size="small" >
                    Home
                </Button>
            </Link>
            <h1>Sign up</h1>

            <div className="form">
                <FormControl className="form-control">
                    <Input
                        className="input"
                        id="input-with-icon-adornment"
                        placeholder="Username"
                        
                        onChange={handleChangeUname}
                        value={username}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle htmlColor="#F6416C" />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className="form-control" >
                    <Input
                        className="input"
                        id="standard-adornment-password"
                        type={showPwd ? 'text' : 'password'}
                        value={password}
                        placeholder="Password"
                        onChange={handleChangePwd}
                        startAdornment={
                            <InputAdornment position="start">
                                <VpnKeyIcon htmlColor="#F6416C" />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPwd ? <Visibility htmlColor="#F6416C" /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className="form-control" >
                    <Input
                        className="input"
                        id="standard-adornment-password"
                        type='password'
                        value={confirmPw}
                        placeholder="ConfirmPassword"
                        onChange={handleChangeConfirmPwd}
                        startAdornment={
                            <InputAdornment position="start">
                                <VpnKeyIcon htmlColor="#F6416C" />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                >
                                    {(confirmPw !== "" && confirmPw == password) && <CheckCircleOutlineIcon htmlColor="#417af6" />}
                                    {(confirmPw !== "" && confirmPw !== password) && <HighlightOffIcon htmlColor="red" />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl className="form-control" >
                    <Input
                        className="input"
                        id="input-with-icon-adornment"
                        placeholder="Phone number"
                        onChange={handlePhone}
                        value={phone}
                        startAdornment={
                            <InputAdornment position="start">
                                <CallIcon htmlColor="#F6416C" />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                >
                                    {validPhone ? <CheckCircleOutlineIcon htmlColor="#417af6" /> : <HighlightOffIcon htmlColor="red" />}

                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className="form-control">
                    <Button
                        variant="contained"
                        color="primary"
                        id="signup-btn"
                        
                        onClick={handleLogin} >
                        Login
                    </Button>
                </FormControl>
            </div>





        </div>
    )
}
export default Form