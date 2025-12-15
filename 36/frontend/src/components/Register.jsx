import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
        }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" ref={usernameRef} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
