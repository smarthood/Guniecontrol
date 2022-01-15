import React from 'react';
import firebase from './firebase';
import '../App.css'

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Wish').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Wish').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div className='container'>
      <div className="box">
      <h5 className={todo.complete ? 'complete' : ''}>Name: {todo.name}</h5>
      <h5 className={todo.complete ? 'complete' : ''}>Email: {todo.email}</h5>
      <h5 className={todo.complete ? 'complete' : ''}>Wish: "{todo.wish}"</h5>
      <button onClick={deleteTodo} className='button'><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" alt='Delete'/></button>
      <button onClick={completeTodo} className='button'><img src="https://img.icons8.com/ios-filled/50/000000/double-tick.png" alt='complete'/></button>
      </div>
    </div>
  );
}
