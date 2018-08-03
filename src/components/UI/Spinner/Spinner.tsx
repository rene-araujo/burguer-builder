import * as React from 'react';
import * as classes from './Spinner.css';

const spinner = () => (
    <div style={{ textAlign: 'center' }}>
        <div className={classes.Ldshourglass}></div>
    </div>

);

export default spinner;