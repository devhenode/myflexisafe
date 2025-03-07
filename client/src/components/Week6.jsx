import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const WeekSix = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Debugging: Log the error state whenever it changes
  useEffect(() => {
    console.log('Error state updated:', error);
  }, [error]);

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const addUser = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    // Check if name is empty
    if (!newUser.name.trim()) {
      console.log('Setting error: Name field is required!');
      setError('Name field is required!');
      return;
    }

    // Check if email is empty
    if (!newUser.email.trim()) {
      setError('Email field is required!');
      return;
    }

    // Validate email format
    if (!isValidEmail(newUser.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Clear any previous errors
    setError('');

    // Sanitize inputs
    const sanitizedName = DOMPurify.sanitize(newUser.name);
    const sanitizedEmail = DOMPurify.sanitize(newUser.email);

    // Check for malicious code
    const maliciousPattern = /(<script\b[^>]*>[\s\S]*?<\/script>|javascript:\s*[^"'\s]+|on\w+\s*=\s*["'][^"']*["']|eval\s*\(|alert\s*\(|document\.|window\.|\.innerHTML\s*=)/gi;
    if (maliciousPattern.test(sanitizedName) || maliciousPattern.test(sanitizedEmail)) {
      setError('Malicious code detected in input!');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: sanitizedName, email: sanitizedEmail }),
      });

      const data = await response.json();
      setUsers([...users, data]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Check if the form is valid
  const isFormValid = newUser.name.trim() && newUser.email.trim() && isValidEmail(newUser.email);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {DOMPurify.sanitize(user.name)} - {DOMPurify.sanitize(user.email)}
          </li>
        ))}
      </ul>

      <h2>Add New User</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type="submit" disabled={!isFormValid}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default WeekSix;