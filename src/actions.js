// action types

// add card
export const addCard = (text, boardIndex) => ({ type: 'ADD_CARD', text, boardIndex });

// remove card
export const removeCard = id => ({ type: 'REMOVE_CARD', id });

// transfer a card
export const transferCard = (id, destinationBoardIndex) => ({ type: 'TRANSFER_CARD', id, destinationBoardIndex });

// add a board on the end
export const addBoard = name => ({ type: 'ADD_BOARD', name });

// remove a board
export const removeBoard = boardIndex => ({ type: 'REMOVE_BOARD', boardIndex });
