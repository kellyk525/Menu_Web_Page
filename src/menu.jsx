import React from 'react';
import Data from './data';
import MenuItem from './menu_item';

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
        // fetch('./data.js')
        //     .then(response => response.json())
        //     .then(menu => this.setState({ menu: menu.brands }, console.log(menu)))
        //     .catch(error => console.log(error))
    }

    render() {

        const { menu } = this.state;
        const category = menu[0].brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0].items[0].categories.title;
        const list = menu[0].brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0].items

        const appetizer = list.map( (item, i) => {
            return (
                <li key={ i }><MenuItem item={item} /></li>
            )
        })

        return (
            <div>
                <div>
                    <div>{ category }</div>
                    <div>Showing { list.length } items</div>
                </div>
                <ul>{ appetizer }</ul>
            </div>
        )
    }
}

export default Menu;