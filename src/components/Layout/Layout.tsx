import * as React from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import * as classes from './Layout.css';


interface IProps {
    children: any;
}

class Layout extends React.Component<IProps> {
    public state = {
        showSideDrawer: true
    }

    public sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    public render() {
        return (
            <>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} toogleBackdropHandler={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }

}

export default Layout;