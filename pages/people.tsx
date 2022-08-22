import React, { useEffect, useState } from 'react';
import { getPersons } from '../API/People/axiosCalls';

interface PeopleProps {
    token: string;
}

export function People({token}: PeopleProps){
    const [people, setPeople] = useState({});
    const  fillPersons = async () => {
       setPeople((await getPersons(token)).data.data)
    }

    useEffect(()=>{
        token ? fillPersons() : null
    }, [token])

    return (
        <>
            <h1>placeHolder</h1>
            <button onClick={()=>console.log(people)}></button>
        </>
    )
}
