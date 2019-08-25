import React from 'react';
import { connect } from 'react-redux';
import ChampionTable from './ChampionTable';

const Home = (props) => {
  return (
    <div className="container home">
        <div className="row center">
            <h1 className="row teal-text center">
                Hello!
            </h1>
        </div>
        <div className="row center">
            <p className="flow-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Delectus temporibus dolorum voluptates assumenda qui magnam ea harum eum illo laborum
                porro deleniti rem tempore, ipsum nihil fugiat quod odio squos?</p>
            <p className="flow-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Delectus temporibus dolorum voluptates assumenda qui magnam ea harum eum illo laborum
                porro deleniti rem tempore, ipsum nihil fugiat quod odio squos?</p>
                
            <ChampionTable championData={props.championData} />
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
