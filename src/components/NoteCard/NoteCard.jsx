import { Button, Card } from 'react-bootstrap';
import './notesCard.css';
import { useContext } from 'react';
import notesContext from '../../providers/NotesContext';
import swal from 'sweetalert';

function NoteCard({ note, index }) {
  const { notes, setNotes } = useContext(notesContext);

  const editNote = () => {
    const filteredNote = notes.filter((note) => index !== notes.indexOf(note));
    swal({
      icon: 'warning',
      text: '¿Está seguro que quiere eliminar la nota?',
      buttons: {
        cancel: {
          text: 'Cancelar',
          visible: true,
        },
        confirm: {
          text: 'Confirmar',
          value: true,
        },
      },
    }).then(async (result) => { 
        //con result lo que obtenemos es al hacer click en confirm es un true, entonces la condicion es si result es true mostrar la alerta de success y eliminar la nota
        // de lo contrario mostrar una alerta de error con la leyenda de que la nota no fue eliminada.
      if (result) {
        swal({
          icon: 'success',
          text: 'Nota eliminada correctamente.',
        });
        await setNotes(filteredNote);
      } else {
        swal({
          icon: 'error',
          text: 'La nota no fue eliminada.',
        });
      }
    });
  };

  return (
    <Card className="noteCard">
      <Card.Img variant="top" src={note.urlImage} />
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.description}</Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="warning" size="sm" className="mx-2">
            Editar nota
          </Button>
          <Button
            variant="danger"
            size="sm"
            className="mx-2"
            onClick={editNote}
          >
            Eliminar nota
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NoteCard;
