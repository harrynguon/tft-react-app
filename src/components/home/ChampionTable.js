import React from 'react';
import Champion from './Champion';

const ChampionTable = (props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Champion</th>
                <th>Origin</th>
                <th>Class</th>
            </tr>
        </thead>

        <tbody>
        { props.championData.map(champ => <Champion champion={champ[1]} 
                                                    key={champ[1].key}
                                                    />) }
        </tbody>
    </table>
  );
}

export default ChampionTable;
