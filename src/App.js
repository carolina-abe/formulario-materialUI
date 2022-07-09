import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

function App() {
  return (
    <Container 
      compomemt="article" 
      maxWidth="sm"
    >
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
