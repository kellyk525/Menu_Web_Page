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
            <div>
                <div>{ item.title }</div>
                <div>{ item.description }</div>
                <div>$ { item.price }</div>
            </div>
        )
    }
}

export default MenuItem;