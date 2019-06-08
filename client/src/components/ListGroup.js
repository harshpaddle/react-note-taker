import React from 'react';

// create a listgroup component that recieves props for it's styling (flush) and receive props for the array of notes
function ListGroup(props) {
  return (
    <div className={`list-grup ${props.flush ? "list-group-flush" : ""}`}>
      {
        (props.noteList.length > 0) ? (
          props.notelist.map(note => {
            return (
              <h1>Hi</h1>
            )
          })
        ) : (
          <h2>No notes to display</h2>
        )
      }
    </div>
  )
}

export default ListGroup;