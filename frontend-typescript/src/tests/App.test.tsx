import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Table from '../components/Table';

describe('Teste front do painel de controle', () => {
  it('Renderiza o texto "painel de controle"', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/painel de controle/i)).toBeInTheDocument();
  });

  it('Teste de busca por nome ou e-mail', async () => {
    render(<Table />, { wrapper: BrowserRouter });

    const searchInput = screen.getByLabelText(/Busque o usuário:/i);

    fireEvent.change(searchInput, { target: { value: 'João' } });

    const userRow = await screen.findByText(/João Silva/i);
    expect(userRow).toBeInTheDocument();
  });

  it('Renderiza a mensagem "Nenhum usuário encontrado" quando não há usuários', () => {
    render(<Table />, { wrapper: BrowserRouter });

    const emptyMessage = screen.getByText(/Usuário não encontrado/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
