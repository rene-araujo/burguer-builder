import * as React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';
import * as classes from '../Toolbar/Toolbar.css';


interface IProps {
    toogleSideDrawer: () => void;
}

const toolbar = (props: IProps) => (
    <header className={classes.Toolbar}>
        <DrawerToogle toogleSideDrawer={props.toogleSideDrawer} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>
);

export default toolbar;