import * as React from 'react';
import * as classes from './BuildControl.css';

interface IProps {
    label: string;
    added: (type: any) => void;
    removed: (type: any) => void;
    disabled: boolean;
}

const buildControl = (props: IProps) => {

    const onAdd = (e: any) => props.added(e);
    const onRemove = (e: any) => props.removed(e);

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={onRemove}
                disabled={props.disabled}>Less</button>
            <button
                className={classes.More}
                onClick={onAdd}>More</button>
        </div>
    );
}

export default buildControl;