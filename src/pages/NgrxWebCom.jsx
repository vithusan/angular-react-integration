import { Link } from 'react-router-dom';

function NgrxWebCom() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-button">Back to Home</Link>
      </nav>
      <news-ngrx></news-ngrx>
    </div>
  );
}

export default NgrxWebCom;