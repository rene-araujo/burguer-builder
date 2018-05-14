import * as React from 'react';
import * as classes from './Layout.css';

interface IProps {
    children: any;
}

const layout = (props: IProps) =>
    <>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>

export default layout;