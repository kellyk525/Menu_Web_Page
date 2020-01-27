import React from 'react';
import Data from './data';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: Data
        }
    }

    componentDidMount() {
        this.fetchMenu();
    }

    fetchMenu() {

        var data = Data;
        // fetch('./data.js')
        //     .then(response => response.json())
        //     .then(menu => this.setState({ menu: menu.brands }, console.log(menu)))
        //     .catch(error => console.log(error))
    }

    render() {

        const { menu } = this.state;
        debugger
        const { category } = menu[0].brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0].items[0].categories.title;

        return (
            <div>
                Hello Menu
            </div>
        )
    }
}

export default Menu;