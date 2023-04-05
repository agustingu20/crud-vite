import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudForm from './components/Formulario/CrudForm';
import NotesList from './components/NotesList/NotesList';
import { NotesProvider } from './providers/NotesContext';

function App() {
  return (
    <div className="App">
      <NotesProvider>
        <CrudForm title='Formulario para ingreso de nota' />
        <NotesList title='Listado de Cards' />
      </NotesProvider>
    </div>
  );
}

export default App;
