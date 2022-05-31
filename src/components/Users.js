import React from "react";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import classes from './Users.module.css';


const Users = ({...props}) => {
    const history = useHistory();
    useEffect(()=> {
        if (props.pattern)
        history.push({
            pathname: '/',
            search: "?" + new URLSearchParams({search: props.pattern.toString()
        })
    });   else {
            history.push({
                pathname:'/'
            })
        }

    },[props.pattern]);
        return (
        <div>
            <ul>
            {props.users.map((user)=><li
                className={classes.users}>{user}</li>)}
            </ul>
        </div>
    )
}

export default Users;