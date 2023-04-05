import NoteCard from '../NoteCard/NoteCard';
import { useContext } from 'react';
import notesContext from '../../providers/NotesContext';

function NotesList({ title }) {
  const { notes } = useContext(notesContext);

  return (
    <>
      <h2 className="mt-5">{title}</h2>
      <div className="d-flex flex-wrap justify-content-center w-100">
        {notes.map((note, index) => (
          <NoteCard key={`note-${index}`} note={note} index={index}/>
        ))}
      </div>
    </>
  );
}

export default NotesList;
