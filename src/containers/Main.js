import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from './Board';

const Main = ({ boards }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {boards.map((board, i) => (
      <Board key={i} index={i} name={board} />
    ))}
  </div>
);

Main.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = state => ({
  boards: state.boards,
});

// create a higher order component "connected" to store
const ConnectedMain = connect(mapStateToProps)(Main);

export default ConnectedMain;
