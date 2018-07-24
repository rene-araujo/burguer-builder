import * as React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import * as classes from './Modal.css';

interface IProps {
    children?: any;
    show: boolean;
    modalClosed: () => void;
}

const modal = (props: IProps) => (
    <>
        <Backdrop show={props.show} toogleBackdrop={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? 1 : 0
            }}
        >
            {props.children}
        </div>
    </>
);

export default modal;