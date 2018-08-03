import * as React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import * as classes from './Modal.css';

interface IProps {
    children?: any;
    show: boolean;
    modalClosed: () => void;
}

class Modal extends React.Component<IProps>{

    public shouldComponentUpdate(nextProps: IProps) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    public componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }

    public render() {
        return (
            <>
                <Backdrop show={this.props.show} toogleBackdrop={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? 1 : 0
                    }}
                >
                    {this.props.children}
                </div>
            </>
        )
    }
}


export default Modal;