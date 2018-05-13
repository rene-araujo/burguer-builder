import * as React from 'react';

interface IProps {
    children: any;
}

const layout = (props: IProps) =>
    <>
        <h1>Hi</h1>
        {props.children}
    </>

export default layout;