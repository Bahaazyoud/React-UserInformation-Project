import React,{useState}from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import cssStyle from './AddUser.module.css'
const AddUser = props => {
    const [enterUsername,setEnteredUsername] = useState('');
    const [enterUserAge,setEnteredUserAge] = useState('');
    const [error,setError] = useState();
    const AddUserHandler = (event) => {
        event.preventDefault();
        if(enterUsername.trim().length === 0 || enterUserAge.trim().length === 0){
            setError({
                title : 'Invalid Input',
                message: 'Please Enter A Valid Name And Age(non-Empty Value)'
            })
            return;
        }
        if(+enterUserAge < 1){
            setError({
                title : 'Invalid Input',
                message: 'Please Enter A Valid Age( > 0).'
            })
            return;
        }
        props.onAddUser(enterUsername,enterUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    }
    const UsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const UserAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={cssStyle.form}>
        <form onSubmit={AddUserHandler}>
            <label htmlFor='username'>UserName</label>
            <input type='text' id='username' value={enterUsername} onChange={UsernameChangeHandler}/>
            <label htmlFor='age'>Age(Years)</label>
            <input type='number' id='age' value={enterUserAge} onChange={UserAgeChangeHandler}/>
            <Button type='submit'>AddUser</Button>
        </form>
        </Card>

        </div>
    )
}
export default AddUser;