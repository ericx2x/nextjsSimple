import React, { useEffect, useState } from 'react';
import { loginWithEmailAndPassword } from '../API/Users/axiosCalls';
import { loginStyles } from '../StyledComponents';
import { useTranslate} from "@tolgee/react";
import { useSetLanguage, useCurrentLanguage } from '@tolgee/react';

const handleInputChange = (event: any, setter: Function) => {
    setter(event.target.value)
}
const handleLoggin = async (password: string, email: string, resSetter: Function) => {
    resSetter(await loginWithEmailAndPassword({ email, password }))
}
interface LoginProps {
    userSetter: Function
}

const Login = ({userSetter}: LoginProps) => {
    // side note: why does the button onclick need to be a function oneliner and not just my function 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState('');
    const {Title, Button, Input, Container} = loginStyles;
    const t = useTranslate();
    const setLanguage = useSetLanguage();
    const getLanguage = useCurrentLanguage();


    //there should be logic here to determine if this is a valid token or not
    useEffect(()=>{
        if(res !== ''){
            console.log(res)
            userSetter(res)
        }
    }, [res])

    //incredibly basic styling due to this not being on a template anyways
    //later I should make this into a form so you can just press enter and have the call go
    return (
    <Container>
        <Title>test login</Title>
        <div>
            <Input name="userName" required placeholder={t("username")}
             onKeyUp={(event: Object) => handleInputChange(event, setEmail)}/>
            <Input name="password" required placeholder={ t("password") } type="password"
             onKeyUp={(event: Object) => handleInputChange(event, setPassword)}/>
        </div>
        <Button onClick={()=>handleLoggin(password, email, setRes)}> login </Button>
        <Button onClick={()=>handleLoggin("nurse", "dennis@promedsoftware.com", setRes)}> login as Dennis </Button>
        <select
            onChange={(e) => setLanguage(e.target.value)}
            value={getLanguage()}
            >
            <option value="en">English</option>
            <option value="es">Spanish</option>
    </select>
    </Container>)
};





export default Login;