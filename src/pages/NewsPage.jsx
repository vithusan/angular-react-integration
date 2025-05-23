import { Link } from 'react-router-dom';

function NewsPage() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-button">Back to Home</Link>
      </nav>
      <angular-news></angular-news>
    </div>
  );
}

export default NewsPage;