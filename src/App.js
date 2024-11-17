import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for additional styling if needed

function App() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    console.log(formData); // Check form data

    // Send the data to your Django backend API
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/expenses/', formData);
        console.log('Response from server:', response);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="App">
      <h1 style={styles.header}>Expense Tracker</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Expense Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="amount" style={styles.label}>Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="date" style={styles.label}>Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="category" style={styles.label}>Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  header: {
    color: '#ff69b4', // pastel pink color
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px auto',
    width: '80%',
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9', // white background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    fontSize: '14px',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#ff69b4', // pastel pink
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff69b4', // pastel pink button
    color: 'white',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%',
    fontWeight: 'bold',
  },
};

export default App;
