import React from 'react';
import { connect } from 'react-redux';

const ChampionInfo = (props) => {
    const champion = props.champion;
    console.log(champion);
    return (
        <div>
            <p>{champion.name}</p>
        </div>
    );
}

const mapStateToProps = (reducer, ownProps) => {
    // Grab ':champID' from router
    const id = ownProps.match.params.champID;
    // Grab the champion from the store
    const champion = reducer.championData
                            .filter(champData => champData[1].id === id);
    // Grab the array of the champion with all the actual data in it
    // It returns an array of an array, hence get the first element
    return {
        champion: champion[0][1]
    }
}

export default connect(mapStateToProps)(ChampionInfo);
