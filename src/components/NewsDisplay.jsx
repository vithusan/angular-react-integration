import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeAngular } from '../utils/angularLoader';
import LoadingModal from './LoadingModal';

function NewsDisplay() {
  const location = useLocation();
  const { inputText } = location.state || { inputText: '' };
//   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = document.getElementById('news-container');
    const handleContentLoaded = () => {
         console.log('content-loaded event received');
        // setIsLoading(false);
    }
    if (container) {
      container.addEventListener('content-loaded', handleContentLoaded);
      container.innerHTML = '';
      const newsComponent = document.createElement('angular-news');
      container.appendChild(newsComponent);

      newsComponent.dispatchEvent(new CustomEvent('input-value', {
        detail: inputText,
        bubbles: true,
        composed: true
      }));
    }

    return () => {
      if (container) {
        container.removeEventListener('content-loaded', handleContentLoaded);
        container.innerHTML = '';
      }
    };
  }, [inputText]);

  return (
    <div className="news-display" style={{ position: 'relative' }}>
      {/* {isLoading && <LoadingModal />} */}
      <div id="news-container"></div>
    </div>
  );
}

export default NewsDisplay;