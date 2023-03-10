import  { useState } from 'react';

import classes from './NewPost.module.css';

const NewPost = ({ onCancel, onAddPost }) => {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    
    const bodyChangeHandler = (e) => {
        setEnteredBody(e.target.value);
    }

    const authorChangeHandler = (e) => {
        setEnteredAuthor(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label className={classes.label}>Text</label>
                <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
            </p>
            <p>
                <label className={classes.label}>Your name</label>
                <textarea type='text' id='name' required onChange={authorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;