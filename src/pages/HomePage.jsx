import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Angular-React Integration</h1>
      <nav>
        <Link to="/input" className="nav-button">
          Go to Input Box Demo
        </Link>
        <Link to="/news" className="nav-button">
          Go to News Page
        </Link>
      </nav>
    </div>
  );
}

export default HomePage;