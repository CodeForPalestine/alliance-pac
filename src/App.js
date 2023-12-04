import './App.css';
import candidates from './candidates.json';

import ilhanImage from './images/ilhan.jpeg';
import rashidaImage from './images/rashida.jpeg';
import summerImage from './images/summer.jpeg';
import coriImage from './images/cori.jpeg';
import andreImage from './images/andre.jpeg';
import alexandriaImage from './images/aoc.jpeg';

function App() {
  // Image mapping
  const imageMap = {
    1: ilhanImage,
    2: rashidaImage,
    3: summerImage,
    4: coriImage,
    5: andreImage,
    6: alexandriaImage,
  };

  return (
    <div>
      <h1 className="page-title">Alliance PAC Candidates</h1>
      <div className="app-container">
        {candidates.map(candidate => (
          <div key={candidate.id} className="candidate-card">
            <img
              src={imageMap[candidate.id]}
              alt={candidate.name}
              className="candidate-image"
            />
            <div className="candidate-content">
              <h5 className="candidate-title">{candidate.name}</h5>
              <p className="candidate-bio">{candidate.bio}</p>
              <button className="donate-button">Donate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

