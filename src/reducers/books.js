const initialState = {
  isReady: false,
  items: null,
};

export default (state = initialState, action) => {

  switch (action.type) {
  case 'SET_BOOKS':
    return {
    ...state,
    items: action.payload,
    isReady: true
    };

    case 'SET_IS_READY':
    return{
      ...state,
      isReady:action.payload
    };

    //TODO сделать функцию добавление книги (для администратора)
    case 'ADD_BOOKS':
      return {
        ...state,
        books: [
          ...state.books,
          action.payload
        ]
      }

    default:
      return state;

  }

}
