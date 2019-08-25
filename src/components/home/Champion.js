import React from 'react';

const Champion = (props) => {
    const champion = props.champion;
    return (
        <tr>
            <td>{ champion.name }</td>
            {/** As a champion can have multiple origins/classes, join them by commas */}
            <td>{ champion.origin.join(', ') }</td>
            <td>{ champion.class.join(', ') }</td>
        </tr>
    );
}

export default Champion;
