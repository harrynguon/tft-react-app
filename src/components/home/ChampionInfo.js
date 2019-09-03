import React from 'react';
import { connect } from 'react-redux';

const ChampionInfo = (props) => {
    const champion = props.champion;
    // ability
    // class
    // cost
    // id
    // items
    // key
    // name
    // origin
    // stats
    return (
        <div className="container">
            <h5>{ champion.name }</h5>
        </div>
    );
}

const mapStateToProps = (reducer, ownProps) => {
    // Grab ':champName' from router
    const name = ownProps.match.params.champName;
    // Grab the champion from the store
    const champion = reducer.championData
                            .filter(champData => champData[1].name === name);
    // Grab the array of the champion with all the actual data in it
    // It returns an array of an array, hence get the first element
    return {
        champion: champion[0][1]
    }
}

export default connect(mapStateToProps)(ChampionInfo);
