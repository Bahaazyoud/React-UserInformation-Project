import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModel.module.css';
const ErrorModel = props => {
    return(
    <div>
    <Card className={classes.model} >
        <header className={classes.header} onClick={props.onConfirm}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
    );
}
export default ErrorModel;