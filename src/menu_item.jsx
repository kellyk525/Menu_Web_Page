import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;

        if (!item) {
            return null;
        }

        return (
            <div className="item-content">
                <h6>{ item.title }</h6>
                <p>{ item.description }</p>
                <p className="price">$ { item.price }</p>
            </div>
        )
    }
}

export default MenuItem;