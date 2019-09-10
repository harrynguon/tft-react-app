import React from 'react';
import { connect } from 'react-redux';
import ChampionTable from './ChampionTable';

const Home = (props) => {
    return (
        <div className="container">
            <div className="row center">
            </div>
            <div className="row center">
                <div className="hide-on-med-and-up scrollableTable">
                    <ChampionTable championData={props.championData} />
                </div>
                <div className="hide-on-small-only">
                    <ChampionTable championData={props.championData} />
                </div>
            </div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
        </div>
    );
}

const mapStateToProps = (reducer) => {
    return {
        championData: reducer.championData
    };
}

export default connect(mapStateToProps)(Home);
