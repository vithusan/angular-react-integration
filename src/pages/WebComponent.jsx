// import { useState, useEffect } from 'react';
// import { initializeAngular } from '../utils/angularLoader';

// function WebComponent() {
//   const [inputText, setInputText] = useState('');
//   const [showNews, setShowNews] = useState(false);

//   useEffect(() => {
//     const loadAngularComponent = async () => {
//       try {
//         await initializeAngular();
//         await customElements.whenDefined('angular-news');
//       } catch (error) {
//         console.error('Error loading Angular component:', error);
//       }
//     };

//     loadAngularComponent();
//   }, []);

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const launchNewsComponent = () => {
//     // Create and dispatch custom event with input value
//     const inputEvent = new CustomEvent('input-value', {
//       detail: inputText,
//       bubbles: true,
//       composed: true
//     });

//     // Create and append the angular-news component
//     const newsComponent = document.createElement('angular-news');
//     document.getElementById('news-container').appendChild(newsComponent);
    
//     // Dispatch the event to the angular component
//     newsComponent.dispatchEvent(inputEvent);
//     setShowNews(true);
//   };

//   return (
//     <div className="home-container">
//       <div className="input-section">
//         <input 
//           type="text" 
//           value={inputText}
//           onChange={handleInputChange}
//           placeholder="Enter text for news component..."
//           className="news-input"
//         />
//         {!showNews && (
//           <button onClick={launchNewsComponent} className="launch-button">
//             Launch News Component
//           </button>
//         )}
//       </div>
//       <div id="news-container"></div>
//     </div>
//   );
// }

// export default WebComponent;




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WebComponent() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const launchNewsComponent = () => {
    navigate('/news-display', { state: { inputText } });
  };

  return (
    <div className="home-container">
      <div className="input-section">
        <input 
          type="text" 
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text for news component..."
          className="news-input"
        />
        <button onClick={launchNewsComponent} className="launch-button">
          Launch News Component
        </button>
      </div>
    </div>
  );
}

export default WebComponent;