import React from 'react';
import Champion from './Champion';

class ChampionTable extends React.Component {
    
    constructor(props) {
        super(props);
        // Create state for manipulating the table data via sorting
        this.state = {
            ascChampion: true,
            championData: props.championData
        };
    }

    // Currying to pass parameters through without calling the function in onClick()
    sortTable = () => {
        // Clone the data before working on it
        let sortedData = this.state.championData.slice();
        sortedData.sort();
        if (this.state.ascChampion) {
            sortedData.reverse();
        }
        this.setState({
            ascChampion: this.state.ascChampion ? false : true,
            championData: sortedData
        });
    }

    render() {
        return (
            <table className="highlight">
                <thead>
                    <tr>
                        <th className="rowChampion" onClick={this.sortTable}>Champion</th>
                        <th>Origin</th>
                        <th>Class</th>
                    </tr>
                </thead>

                <tbody>
                { this.state.championData.map(champ => <Champion champion={champ[1]} 
                                                            key={champ[1].key}
                                                            />) }
                </tbody>
            </table>
        );
    }

}

export default ChampionTable;
