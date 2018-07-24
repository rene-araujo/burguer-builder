import * as React from 'react';
import * as classes from './Backdrop.css';

interface IProps {
    show?: boolean;
    toogleBackdrop: () => void;
}

const backdrop = (props: IProps) => (
    props.show ? <div className={classes.Backdrop} onClick={props.toogleBackdrop}></div> : null
)

export default backdrop;