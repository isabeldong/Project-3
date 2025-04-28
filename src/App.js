import './App.css';
import { useState } from 'react';
import About from './About';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  if (showAbout) {
    return (
      <main>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <button 
            onClick={() => setShowAbout(false)} 
            style={{
              backgroundColor: '#ddd', 
              border: 'none', 
              borderRadius: '5px', 
              padding: '5px 10px',
              cursor: 'pointer'
            }}
          >
            Home
          </button>
        </div>
        <About />
      </main>
    );
  }

  return (
    <main>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <button 
          onClick={() => setShowAbout(true)} 
          style={{
            backgroundColor: '#ddd', 
            border: 'none', 
            borderRadius: '5px', 
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          About Us
        </button>
      </div>

      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" placeholder="+200 new samsung tv" />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder="description" />
        </div>
        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">+400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
