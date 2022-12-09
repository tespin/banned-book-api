import React from 'react';

import Card from '../UI/Card';
import classes from './Snippet.module.css';

const Snippet = (props) => {
    return (
        <>
            <pre className={classes.snippet}><code>{`https://banned-books-api.onrender.com/api/books?${props.endpoint}=${props.params}`}</code></pre>
        </>
    );
}

export default Snippet;