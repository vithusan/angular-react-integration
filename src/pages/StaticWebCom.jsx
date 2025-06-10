import { Link } from 'react-router-dom';

function StaticWebCom() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-button">Back to Home</Link>
      </nav>
      <static-web></static-web>
    </div>
  );
}

export default StaticWebCom;