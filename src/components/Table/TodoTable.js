import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../redux/slices/todosSlice';
import { Table, Button } from 'react-bootstrap';

const TodoTable = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.status}</td>
            <td>{todo.createdAt}</td>
            <td>
              <Button variant='danger' onClick={() => handleDelete(todo.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TodoTable;
