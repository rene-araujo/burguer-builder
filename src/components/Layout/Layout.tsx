import * as React from 'react';

interface IProps {
    children: any;
}

const layout = (props: IProps) =>
    <>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>

export default layout;