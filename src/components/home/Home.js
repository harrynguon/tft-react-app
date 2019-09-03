import React from 'react';
import { connect } from 'react-redux';
import ChampionTable from './ChampionTable';

const Home = (props) => {
    return (
        <div className="container">
            <div className="row center">
                
            </div>
            <div className="row center">
                <p className="flow-text">This is a very basic <i>React+Redux</i> Web Application that retrieves and displays 
                data for all champions in Teamfight Tactics.</p>
                <p className="flow-text">Redux is used to store the data that gets retrieved in the application. The application then uses the Redux store to retrieve the data.</p>
                <p className="flow-text">Right below is the table of all the champions in Teamfight Tactics. All data is pulled from the Riot Games API. </p>
                <p className="flow-text">You can click on a champion to view detailed stats about them.</p>
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
