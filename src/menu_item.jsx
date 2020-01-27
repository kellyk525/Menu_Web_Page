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
                { item.title }
            </div>
        )
    }
}

export default MenuItem;