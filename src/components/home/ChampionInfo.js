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
        <div className="container center">
            <h4>Champion: <b>{ champion.name }</b></h4>

            <div className="divider" />
            <div className="section" />

            <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"><b>About</b></span>
                            <p>ID: { champion.id }</p>
                                <p>Origin: { champion.origin.join(', ') }</p>
                                <p>Class: { champion.class.join(', ') }</p>
                                <p>Cost: { champion.cost }</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="card grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"><b>Preferred items</b></span>
                            <ul className="collection">
                                { champion.items.map(item =>    <li className="collection-item grey white-text"
                                                                    key={champion.id+item} 
                                                                >
                                                                    { item }
                                                                </li>) 
                                }
                            </ul>
                        </div>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 l6">
                    <div className="card grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"><b>Stats</b></span>
                            <h6><u>Offense</u></h6>
                            <p>Damage: { champion.stats.offense.damage }</p>
                            <p>Attack Speed: { champion.stats.offense.attackSpeed }</p>
                            <p>DPS: { champion.stats.offense.dps }</p>
                            <p>Range: { champion.stats.offense.range }</p>
                            <h6><u>Defense</u></h6>
                            <p>Health: { champion.stats.defense.health }</p>
                            <p>Armor: { champion.stats.defense.armor }</p>
                            <p>Magic Resist: { champion.stats.defense.magicResist }</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l6">
                    <div className="card grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"><b>Ability</b></span>
                            <p>Name: { champion.ability.name }</p>
                            Description:    <blockquote>
                                                { champion.ability.description }
                                            </blockquote>
                            <p>Type: { champion.ability.type }</p>
                            <p>Mana Cost: { champion.ability.manaCost }</p>
                            <p>Mana Start: { champion.ability.manaStart }</p>
                            Stats:
                            <ul className="collection">
                                { champion.ability
                                    .stats
                                    .map(stat =>    <li className="collection-item grey white-text" 
                                                        key={champion.id + stat.type} 
                                                        >
                                                            Type: { stat.type } <br></br> 
                                                            Value: { stat.value }
                                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/**  UNFORMATTED DATA

            <div className="section">
                <h5>About</h5>
                <p>ID: { champion.id }</p>
                <p>Origin: { champion.origin.join(', ') }</p>
                <p>Class: { champion.class.join(', ') }</p>
                <p>Cost: { champion.cost }</p>
            </div>

            <div className="divider" />

            <div className="section">
                <h5>Preferred Items</h5>
                <ul className="collection">
                    { champion.items.map(item => <li className="collection-item" key={champion.id+item} >{ item }</li>) }
                </ul>
            </div>

            <div className="divider" />

            <div className="section">
                <h5>Stats</h5>
                <h6>Offense</h6>
                <p>Damage: { champion.stats.offense.damage }</p>
                <p>Attack Speed: { champion.stats.offense.attackSpeed }</p>
                <p>DPS: { champion.stats.offense.dps }</p>
                <p>Range: { champion.stats.offense.range }</p>
                <h6>Defense</h6>
                <p>Health: { champion.stats.defense.health }</p>
                <p>Armor: { champion.stats.defense.armor }</p>
                <p>Magic Resist: { champion.stats.defense.magicResist }</p>
            </div>

            <div className="divider" />

            <div className="section">
                <h5>Ability</h5>
                <p>Name: { champion.ability.name }</p>
                Description: <blockquote>{ champion.ability.description }</blockquote>
                <p>Type: { champion.ability.type }</p>
                <p>Mana Cost: { champion.ability.manaCost }</p>
                <p>Mana Start: { champion.ability.manaStart }</p>
                Stats:
                <ul className="collection">
                    { champion.ability
                                .stats
                                .map(stat =>    <li className="collection-item" 
                                                    key={champion.id + stat.type} 
                                                    >
                                                        Type: { stat.type } <br></br> 
                                                        Value: { stat.value }
                                                </li>) }
                </ul>
            </div>
            */}
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
