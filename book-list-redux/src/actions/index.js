//Single (action creator) called select books
//it is going to return an object with type property
export function selectBook(book) {
  console.log('A book has been selected:', book.title);

  // the actual action that is going to takes place once the action creator is called by clicking
  //actions usually have two values a type and a payload (peice of data that will further describes
  // or clarifies the conditions of the action that's being triggered) every action must have a type
  // that describes the purpose of the action.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
