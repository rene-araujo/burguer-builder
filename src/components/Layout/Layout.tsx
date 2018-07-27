import * as React from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import * as classes from './Layout.css';


interface IProps {
    children: any;
}

interface IState {
    showSideDrawer: boolean;
}

class Layout extends React.Component<IProps, IState> {
    public state = {
        showSideDrawer: false
    }

    public sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    public toogleSideDrawerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    public render() {
        return (
            <>
                <Toolbar toogleSideDrawer={this.toogleSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} toogleBackdropHandler={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }

}

export default Layout;