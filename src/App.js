import './App.css';
import candidates from './candidates.json';

import ilhanImage from './images/ilhan.jpeg';
import rashidaImage from './images/rashida.jpeg';
import summerImage from './images/summer.jpeg';
import coriImage from './images/cori.jpeg';
import andreImage from './images/andre.jpeg';
import alexandriaImage from './images/aoc.jpeg';
import deliaImage from './images/delia.jpeg';
import jamaalImage from './images/jamaal.jpeg';
import alImage from './images/al.jpeg';
import thomasImage from './images/thomas.jpeg';

const fundraisingGoal = 500000; // Goal amount of $500k

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateRandomAmount(min, max, multiple) {
  const range = (max - min) / multiple;
  const randomNum = Math.floor(Math.random() * range) * multiple;
  return min + randomNum;
}

function App() {
  // Updated image mapping
  const imageMap = {
    1: ilhanImage,
    2: rashidaImage,
    3: summerImage,
    4: coriImage,
    5: andreImage,
    6: alexandriaImage,
    7: deliaImage,
    8: jamaalImage,
    9: alImage,
    10: thomasImage
  };

  // Add dummy fundraising data
  const candidatesWithFundraising = candidates.map(candidate => ({
    ...candidate,
    raisedAmount: generateRandomAmount(50000, 450000, 500), // Generate amount between $50k and $450k, multiple of $500
  })).map(candidate => ({
    ...candidate,
    raisedPercent: Math.round((candidate.raisedAmount / fundraisingGoal) * 100), // Calculate percentage
    goalAmount: fundraisingGoal,
  }));

  // Shuffle candidates array
  const shuffledCandidates = shuffleArray([...candidatesWithFundraising]);

  return (
    <div>
      <h1 className="page-title">Alliance PAC Candidates</h1>
      <div className="app-container">
        {shuffledCandidates.map(candidate => (
          <div key={candidate.id} className="candidate-card">
            <img
              src={imageMap[candidate.id]}
              alt={candidate.name}
              className="candidate-image"
            />
            <div className="candidate-content">
              <h5 className="candidate-title">{candidate.name}</h5>
              <p className="candidate-bio">{candidate.bio}</p>
              <div className="donation-area">
                <button className="donate-button">Donate</button>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${candidate.raisedPercent}%` }}></div>
                  <div className="progress-bar-text">
                    ${candidate.raisedAmount.toLocaleString()} / ${candidate.goalAmount.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

