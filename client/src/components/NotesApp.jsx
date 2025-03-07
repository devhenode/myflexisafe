import React from 'react'; // Add this line
import { useRef } from 'react';
import useLocalStorage from './useLocalStorage';
import './NotesApp.css';


function NotesApp() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const inputRef = useRef(null);

  const addNote = () => {
    const text = inputRef.current.value.trim();
    if (text === '') return; // Don't add empty notes
    setNotes([...notes, { id: Date.now(), text }]);
    inputRef.current.value = ''; // Clear input
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1>My Notes App [I will be converting it soon] </h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new note"
          onKeyPress={(e) => e.key === 'Enter' && addNote()}
        />
        <button onClick={addNote}>Add Note </button>
      </div>
      <ol>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text} 👈 made use of useRef on that
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default NotesApp;