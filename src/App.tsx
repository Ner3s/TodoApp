import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

// Components
import Button from './components/Button';
import Input from './components/Input';


import { Card, Container, ContainerFluid, FormGroup, Todoarea } from './styles/app';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  // Todo lógica...

  const [tarefas, setTarefas] = useState(['Initial state']);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [index, setIndex] = useState(-1);

  function handleChangeInput(e: any) {
    // console.log('Valor do input: ', e.target.value);
    setNovaTarefa(e.target.value);
  }

  function handleSubmitForm(e: any) {
    e.preventDefault();
    setNovaTarefa(novaTarefa.trim());

    if (tarefas.indexOf(novaTarefa) !== -1) return false;

    if (index === -1) { // Criar
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');

    } else { // Editar
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa;

      setTarefas([...novasTarefas]);
      setIndex(-1);
      setNovaTarefa('');
    }
  }

  function handleDeleteTask(task: string, index: number) {
    let novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    // console.log('Novas tarefas: ', novasTarefas);
    setTarefas(novasTarefas);
  }

  function handleEditTask(task: string, index: number) {
    setIndex(1);
    setNovaTarefa(tarefas[index]);
  }

  // Todo render
  return (
    <>
      <ContainerFluid>
        <Container>
          <h1>Todo app</h1>
          <Card>
            <FormGroup onSubmit={handleSubmitForm} action="#">
              <Input
                placeholder="Insira uma tarefa"
                onChange={handleChangeInput}
                value={novaTarefa}
              />
              <Button />
            </FormGroup>

            <Todoarea>
              <ul>
                {tarefas.map((tarefa, index) =>
                (
                  <li key={tarefa}>
                    {tarefa}
                    <span>
                      <FaEdit onClick={(e) => handleEditTask(tarefa, index)} />
                      <FaTrash onClick={(e) => handleDeleteTask(tarefa, index)} />
                    </span>
                  </li>
                )
                )}
              </ul>
            </Todoarea>

          </Card>
        </Container>
      </ContainerFluid>
      <GlobalStyle />
    </>
  );
}

export default App;
