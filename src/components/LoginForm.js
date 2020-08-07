import React, { useState } from 'react';
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




const Form = (props) => {



    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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

    return (

        <div  >
            <Link style={{  'marginTop': '40px' }} to="/" >
                <Button
                    variant="contained"
                    color="primary"
                    style={{ 'display': 'block', 'marginTop': '40px' }}
                    size="small" >
                    Home
                </Button>
            </Link>
            <h1 style={{ 'textAlign': 'center' }} >Login</h1>
            <FormControl style={{ 'width': '100%', 'marginTop': '40px' }}>
                <Input
                    style={{ 'width': '45%', 'margin': 'auto' }}
                    id="input-with-icon-adornment"
                    placeholder="Username"
                    onChange={handleChangeUname}
                    value={username}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle htmlColor="#673ab7" />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <br /><br />
            <FormControl style={{ 'width': '100%' }}>
                <Input
                    style={{ 'width': '45%', 'margin': 'auto' }}
                    id="standard-adornment-password"
                    type={showPwd ? 'text' : 'password'}
                    value={password}
                    placeholder="Password"
                    onChange={handleChangePwd}
                    startAdornment={
                        <InputAdornment position="start">
                            <VpnKeyIcon htmlColor="#673ab7" />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPwd ? <Visibility htmlColor="#651fff" /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                style={{ 'display': 'block', 'margin': 'auto', 'marginTop': '40px' }}
                onClick={handleLogin} >
                Login
            </Button>

            
            


        </div>
    )
}
export default Form