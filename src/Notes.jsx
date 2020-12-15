import React from 'react';

const Notes = (props) =>{
    return (
        <>
        <div className='notes_style'>
        <i class="fas fa-times" aria-hidden='true'/>
        <li>{props.text}</li>;
        </div>
        </>
    )
}

export default Notes;