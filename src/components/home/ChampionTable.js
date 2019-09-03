import React from 'react';
import Champion from './Champion';

class ChampionTable extends React.Component {
    
    constructor(props) {
        super(props);
        // Create state for manipulating the table data via sorting
        this.state = {
            ascChampion: true,
            ascOrigins: true,
            ascClasses: true,
            championData: props.championData
        };
    }

    // Currying to pass parameters through without calling the function in onClick()
    sortTable = (field) => () => {
        // Clone the data before working on it
        let dataCopy = this.state.championData.slice();
        switch (field) {
            case 'champions': 
                dataCopy.sort();
                if (this.state.ascChampion) {
                    dataCopy.reverse();
                }
                this.setState({
                    ascChampion: this.state.ascChampion ? false : true,
                    championData: dataCopy
                });
                break;
            case 'origins': 
                dataCopy.sort((a, b) => a[1].origin[0].localeCompare(b[1].origin[0]));
                if (this.state.ascOrigins) {
                    dataCopy.reverse();
                }
                this.setState({
                    ascOrigins: this.state.ascOrigins ? false : true,
                    championData: dataCopy
                });
                break;
            case 'classes': 
                dataCopy.sort((a, b) => a[1].class[0].localeCompare(b[1].class[0]));
                if (this.state.ascClasses) {
                    dataCopy.reverse();
                }
                this.setState({
                    ascClasses: this.state.ascClasses ? false : true,
                    championData: dataCopy
                });
                break;
            default: 
                return;
        }
    }

    render() {
        return (
            <div className="container">
                <table className="highlight">
                    <thead>
                        <tr>
                            <th className="rowTableActive" onClick={this.sortTable('champions')}>Champion</th>
                            <th className="rowTableActive" onClick={this.sortTable('origins')}>Origin</th>
                            <th className="rowTableActive" onClick={this.sortTable('classes')}>Class</th>
                        </tr>
                    </thead>

                    <tbody>
                    { this.state.championData.map(champ => <Champion champion={champ[1]} 
                                                                key={champ[1].id}
                                                                />) }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ChampionTable;
