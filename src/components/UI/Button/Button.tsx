import * as React from 'react';
import * as classes from '../Button/Button.css';

interface IProps {
    children: any;
    clicked: any;
    btnType: string;
}
const button = (props: IProps) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;