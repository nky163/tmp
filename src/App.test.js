import { screen, render, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('コンポーネントの表示', () => {
  describe('初期表示で、タスク入力欄と追加ボタンを表示する', () => {
    it('初期表示で、入力エリア「TODO」とボタン「Add」とタスク「empty」を表示する', () => {
      render(<App/>);
      screen.getByLabelText('TODO');
      screen.getByText('Add');
      screen.getByText('Empty');
    });
  });
})

describe('タスク追加', () => {
  describe('タスクを入力しAddボタンを押下すると、一覧に、追加したタスクを表示する', () => {
    it('task1と入力してAddボタンを押下すると、一覧にtask1を表示する', () => {
      render(<App/>);
      
      userEvent.type(screen.getByRole('textbox'), 'task1');
      userEvent.click(screen.getByRole('button', {name: 'Add'}));
      expect(screen.getByText('task1')).toBeInTheDocument();
    });
    it('task1と入力してAddボタンを押下すると、入力エリアをクリアする', () => {
      render(<App/>);
      
      userEvent.type(screen.getByRole('textbox'), 'task1');
      userEvent.click(screen.getByRole('button', {name: 'Add'}));
      expect(screen.getByLabelText('TODO')).toHaveValue('');
    });
  });
  describe('複数のタスクを追加すると、複数のタスクを表示する', () => {
    it('task-1と入力してAddボタンを押下し、続けてtask-2と入力しAddボタンを押下すると、２つのタスクを表示する', () => {
      render(<App/>);
      
      userEvent.type(screen.getByLabelText('TODO'), 'task-1');
      userEvent.click(screen.getByRole('button', {name: 'Add'}));
      userEvent.type(screen.getByLabelText('TODO'), 'task-2');
      userEvent.click(screen.getByRole('button', {name: 'Add'}));
      
      expect(screen.getAllByText(/task-/i)).toHaveLength(2);
    });
  });
});

