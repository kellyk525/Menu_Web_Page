import React from 'react';
import Data from './data';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: Data
        }
    }

    render() {

        const { menu } = this.state;
        const restaurant = menu[0].brands[0].name;
        const address = menu[0].brands[0].storeGroups[0].stores[0].address;

        return (
            <div className="navbar" >
                <div className="nav-content">
                    <div>{ restaurant }</div>
                    <div>{ address }</div>
                </div>
                <div className="nav-circle"></div>
            </div>
        )
    }
}
export default Navbar;