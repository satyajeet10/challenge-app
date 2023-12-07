import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/slices/todosSlice';
import { Form, Button } from 'react-bootstrap';

const TodoForm = () => {
  const dispatch = useDispatch();
  const { todos = [], formData = {} } = useSelector((state) => state);
  const { selectedTaskId = '' } = formData;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  console.log(todos, '<=======', selectedTaskId);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!title.trim() || !description.trim()) {
      alert('Title and description are required!');
      return;
    }

    // Dispatch action to add todo
    dispatch(
      addTodo({
        id: todos.length + 1,
        title,
        description,
        status,
        createdAt: new Date().toISOString(),
      })
    );

    // Clear form fields
    setTitle('');
    setDescription('');
    setStatus('pending');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='title'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='status'>
        <Form.Label>Status</Form.Label>
        <Form.Control
          as='select'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value='pending'>Pending</option>
          <option value='completed'>Completed</option>
        </Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add Todo
      </Button>
    </Form>
  );
};

export default TodoForm;
