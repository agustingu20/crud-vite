import { useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import notesContext from '../../providers/NotesContext';

function CrudForm({ title }) {
  const { setNote, note, setNotes, notes } = useContext(notesContext);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, note]);
    e.target.reset();
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <h2 className='mb-3'>{title}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Título</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Ingrese Url de la imagen</Form.Label>
          <Form.Control
            name="urlImage"
            type="text"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Label>Ingrese el detalle de la nota</Form.Label>
          <Form.Control
            name="description"
            type="text"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar nota
        </Button>
      </Form>
    </>
  );
}

export default CrudForm;
