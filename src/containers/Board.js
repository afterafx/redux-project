import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { addCard, removeCard } from '../actions';
import * as Actions from '../actions';
import AddCardForm from '../components/AddCardForm';
import Card from '../components/Card';

class Board extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func,
    removeCard: PropTypes.func,
    transferCard: PropTypes.func,
  };

  handleDrop = e => {
    e.preventDefault();
    // console.log('dropping...');
    this.props.transferCard(e.dataTransfer.getData('cardId'), this.props.index);
  };

  render() {
    const { index, name, cards, addCard, removeCard } = this.props;
    return (
      <div
        className="board"
        style={{
          flex: '0 0 300px',
          margin: '15px',
          padding: '15px',
          borderRadius: '5px',
          backgroundColor: '#E3E4E6',
          boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
        }}
        onDragOver={e => e.preventDefault()}
        onDrop={this.handleDrop}
      >
        <h2 style={{ margin: '0', marginBottom: '1rem' }}>{name}</h2>

        {cards.map((card, i) => (
          <Card key={i} card={card} removeCard={removeCard} />
        ))}
        <AddCardForm boardIndex={index} addCard={addCard} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cards: state.cards.filter(card => card.board === ownProps.index),
});

// const mapDispatchToProps = dispatch => ({
//   addCard: (text, boardIndex) => dispatch(Actions.addCard(text, boardIndex)),
//   removeCard: boardIndex => dispatch(Actions.removeCard(boardIndex)),
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard: Actions.addCard,
      removeCard: Actions.removeCard,
      transferCard: Actions.transferCard,
    },
    dispatch
  );

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoard;
