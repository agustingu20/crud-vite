import { useState } from 'react';
import { createContext } from 'react';

const notesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [note, setNote] = useState({ title: '', urlImage: '', description: '' })
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  const data = {
    note,
    setNote,
    notes,
    setNotes,
  };

  return <notesContext.Provider value={data}>{children}</notesContext.Provider>;
};

export default notesContext;
