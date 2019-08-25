import React from 'react';
import { connect } from 'react-redux';
import ChampionTable from './ChampionTable';

const Home = (props) => {
    return (
        <div className="container">
            <div className="row center">
                <h1 className="row grey-text center">
                    Hello!
                </h1>
            </div>
            <div className="row center">
                <p className="flow-text">This is a basic Teamfight Tactics Web App that displays 
                data for all champions. Below is the table of champions:</p>
            </div>
            <div className="row center">
                <div className="hide-on-med-and-up scrollableTable">
                    <ChampionTable championData={props.championData} />
                </div>
                <div className="hide-on-small-only">
                    <ChampionTable championData={props.championData} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (reducer) => {
    return {
        championData: reducer.championData
    };
}

export default connect(mapStateToProps)(Home);
