import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import AddCardForm from '../components/AddCardForm';
import Card from '../components/Card';

class Board extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func,
  };

  handleDrop = e => {
    e.preventDefault();
    console.log('dropping...');
  };

  render() {
    const { index, name, cards, addCard } = this.props;
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
          <Card key={i} card={card} />
        ))}
        <AddCardForm boardIndex={index} addCard={addCard} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cards: state.cards.filter(card => card.board === ownProps.index),
});

const mapDispatchToProps = dispatch => ({
  addCard: (text, boardIndex) => dispatch(addCard(text, boardIndex)),
});

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoard;
