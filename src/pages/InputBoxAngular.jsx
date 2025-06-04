import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function InputBoxAngular() {
  const [angularInputValue, setAngularInputValue] = useState('');

  useEffect(() => {
    const handleValueChange = (e) => {
      console.log('New value received:', e.detail); // Debug log
      setAngularInputValue(e.detail);
    };

    const input = document.querySelector('angular-input');
    input?.addEventListener('value-changed', handleValueChange);

    console.log('Event listener attached'); // Debug log

    return () => {
      console.log('Cleaning up event listener'); // Debug log
      input?.removeEventListener('value-changed', handleValueChange);
    };
  }, []);

  console.log('Component rendered with value:', angularInputValue); // Debug log

  return (
    <div>
      <h1>Input Test Page</h1>
      <angular-input value={angularInputValue}></angular-input>
      <p>Current value: {angularInputValue}</p>

      <nav>
        <Link to="/" className="nav-button">Back to Home</Link>
      </nav>
    </div>
  );
}

export default InputBoxAngular;