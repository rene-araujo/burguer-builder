import * as React from 'react';
import * as classes from './NavigationItem.css';

interface IProps {
    link: string;
    children: any;
    active?: boolean;
}

const navigationItem = (props: IProps) => (
    <li className={classes.NavigatiomItem}>
        <a href={props.link} className={props.active ? classes.active : ''}>{props.children}</a>
    </li>
);

export default navigationItem;
