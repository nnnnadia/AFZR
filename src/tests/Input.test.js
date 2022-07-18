import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from'@testing-library/user-event';
import { clear } from '@testing-library/user-event/dist/clear';
import App from '../App';

describe('Testa input de nova tarefa', () => {
  it('é renderizado na tela junto com o botão', () => {
    render(<App />);
    const taskInput = screen.getByRole('textbox');
    expect(taskInput).toBeInTheDocument();
    const taskButton = screen.getByRole('button', { name: 'Nova tarefa'});
    expect(taskButton).toBeInTheDocument();
  });
  it('ao adicionar uma nova tarefa ela é exibida em uma lista', () => {
    render(<App />);
    const taskInput = screen.getByRole('textbox');
    const taskButton = screen.getByRole('button', { name: 'Nova tarefa'});
    const TASK_DECRIPTION = 'nadação';
    userEvent.type(taskInput, TASK_DECRIPTION);
    userEvent.click(taskButton);
    const taskOnDisplay = screen.getByRole('listitem');
    expect(taskOnDisplay).toHaveTextContent(TASK_DECRIPTION);
  });
  it('é possível adicionar múltiplas tarefas', () => {
    render(<App />);
    const taskInput = screen.getByRole('textbox');
    const taskButton = screen.getByRole('button', { name: 'Nova tarefa'});
    const TASK_DECRIPTION_1 = 'nadação';
    const TASK_DECRIPTION_2 = 'estudar';
    userEvent.type(taskInput, TASK_DECRIPTION_1);
    userEvent.click(taskButton);
    clear(taskInput);
    userEvent.type(taskInput, TASK_DECRIPTION_2);
    userEvent.click(taskButton);
    const tasksOnDisplay = screen.getAllByRole('listitem');
    expect(tasksOnDisplay[0]).toHaveTextContent(TASK_DECRIPTION_1);
    expect(tasksOnDisplay[1]).toHaveTextContent(TASK_DECRIPTION_2);
  });
  it('o texto do input é apagado quando uma nova tarefa é adicionada', () => {
    render(<App />);
    const taskInput = screen.getByRole('textbox');
    const taskButton = screen.getByRole('button', { name: 'Nova tarefa'});
    const TASK_DECRIPTION = 'nadação';
    userEvent.type(taskInput, TASK_DECRIPTION);
    userEvent.click(taskButton);
    expect(taskInput.value).not.toMatch(TASK_DECRIPTION);
    expect(taskInput.value).toBeFalsy();
  });
});
