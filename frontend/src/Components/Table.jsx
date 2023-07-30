import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((response) => {
                setUsers(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Erro ao obter os usuários:', error);
            });
    }, []);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredUsers = users.filter(
        (user) =>
            user.nome.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Painel de Controle - Meu Guru </h1>
            <label for="searchInput">Busque o usuário:</label>
            <input
                type="text"
                id="searchInput"
                value={search}
                onChange={handleChange}
                placeholder="Buscar por nome ou e-mail"
            />
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.idade}</td>
                            <td>{user.sexo}</td>
                            <td>{user.cidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
