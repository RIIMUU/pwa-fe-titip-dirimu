import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Alert } from 'antd';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '100px' }}>
      <h2>Login</h2>
      {error && <Alert message={error} type="error" showIcon />}
      <Form
        layout="vertical"
        onFinish={handleLogin}
        style={{ marginTop: '20px' }}
      >
        <Form.Item label="Username" required>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </Form.Item>
        <Form.Item label="Password" required>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
