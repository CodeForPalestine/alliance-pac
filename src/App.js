import logo from './logo.svg';
import './App.css';

function App() {
  // Dummy data for candidates
  const candidates = [
    { id: 1, name: "Candidate 1", bio: "Bio of Candidate 1" },
    { id: 2, name: "Candidate 2", bio: "Bio of Candidate 2" },
    { id: 3, name: "Candidate 3", bio: "Bio of Candidate 3" },
    { id: 4, name: "Candidate 4", bio: "Bio of Candidate 4" },
    { id: 5, name: "Candidate 5", bio: "Bio of Candidate 5" },
    { id: 6, name: "Candidate 6", bio: "Bio of Candidate 6" },
    { id: 7, name: "Candidate 7", bio: "Bio of Candidate 7" },
    { id: 8, name: "Candidate 8", bio: "Bio of Candidate 8" },
    // ... more candidates
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {candidates.map(candidate => (
          <div key={candidate.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{candidate.name}</h5>
                <p className="card-text">{candidate.bio}</p>
                <button className="btn btn-primary">Donate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coming Soon</h1>
        <p>Stay tuned for more information about our candidates and how you can support them.</p>
      </header>
    </div>
  );
  */
}

export default App;
