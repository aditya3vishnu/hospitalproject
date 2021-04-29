import React from 'react';
import { useHistory } from "react-router-dom";


const HomeScreen = () => {
    let history = useHistory()

    const hospitalHandler = () => {
            history.push("/HospitalScreen");
    }

    const userHandler = () => {
            history.push("/UserScreen")
    }


    return (
        <div>
            <button onClick={hospitalHandler}>Hospital</button>
            <button onClick={userHandler}>User</button>
        </div>
    )
} 

export default HomeScreen;