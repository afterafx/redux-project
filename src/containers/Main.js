import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Board from './Board';

// const handleAddBoard = () => {
//   const name = prompt('Enter Board Name');
//   this.props.boards.push(this.Actions.addBoard(name));
// };

const Main = ({ boards, addBoard }) => (
  <div>
    <button
      style={{
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        marginLeft: '15px',
        borderRadius: '5px',
        backgroundColor: 'rgb(227, 228, 230)',
      }}
      onClick={() => {
        const name = prompt('Enter Board Name');
        boards.push(addBoard(name));
      }}
    >
      <h3
        style={{
          padding: '0px',
          margin: '0',
        }}
      >
        Add Board
      </h3>
    </button>
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
  </div>
);

Main.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string),
  addBoard: PropTypes.func,
};

const mapStateToProps = state => ({
  boards: state.boards,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addBoard: Actions.addBoard,
    },
    dispatch
  );

// create a higher order component "connected" to store
const ConnectedMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default ConnectedMain;
