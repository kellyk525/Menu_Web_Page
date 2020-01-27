import React from 'react';
import NavBar from './navbar';
import Menu from './menu';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                <Menu />
            </div>
        )
    }
}

export default Root;