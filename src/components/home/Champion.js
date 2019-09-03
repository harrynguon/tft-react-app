import React from 'react';
import { Link } from 'react-router-dom';

const Champion = (props) => {
    const champion = props.champion;
    return (
        <tr>
            <td>
                <Link to={`/champion/${champion.id}`} key={champion.id} >
                        { champion.name }
                </Link>
            </td>
            {/** As a champion can have multiple origins/classes, join them by commas */}
            <td>{ champion.origin.join(', ') }</td>
            <td>{ champion.class.join(', ') }</td>
        </tr>
    );
}

export default Champion;
