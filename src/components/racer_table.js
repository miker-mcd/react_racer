import React from 'react';
import RacerStrip from './racer_strip';

const RacerTable = () => {
  return (
    <table className="racer-table">
      <tbody>
        <RacerStrip id="player1-strip" />
        <RacerStrip id="player2-strip" />
      </tbody>
    </table>
  );
};

export default RacerTable;
