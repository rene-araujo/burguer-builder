import * as React from 'react';
import * as classes from './DrawerToogle.css';

interface IProps {
    toogleSideDrawer: () => void;
}

const drawerToogle = (props: IProps) => (
    <div className={classes.DrawerToggle} onClick={props.toogleSideDrawer}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToogle;