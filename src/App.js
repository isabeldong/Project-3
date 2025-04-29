import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SpendingSummary from './SpendingSummary'; // 대소문자 정확히!

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  async function getTransactions() {
    const url = `${process.env.REACT_APP_API_URL}/api/transactions`;
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/transaction`;
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
        category,
      }),
    }).then(response => {
      response.json().then(json => {
        setName('');
        setDatetime('');
        setDescription('');
        setCategory('');
        setTransactions(prev => [...prev, json]);
      });
    });
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance += transaction.price;
  }
  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];

  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">🏠 Home</Link> | <Link to="/summary">📊 Summary</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <main>
            <h1>${balance}<span>{fraction}</span></h1>

            <form onSubmit={addNewTransaction}>
              <div className="basic">
                <input 
                  type="text" 
                  value={name}
                  onChange={ev => setName(ev.target.value)}
                  placeholder="+200 new samsung tv" 
                />
                <input 
                  type="datetime-local" 
                  value={datetime}
                  onChange={ev => setDatetime(ev.target.value)}
                />
              </div>

              <div className="description">
                <input 
                  type="text" 
                  value={description}
                  onChange={ev => setDescription(ev.target.value)}
                  placeholder="description" 
                />
                <input 
                  type="text" 
                  value={category}
                  onChange={ev => setCategory(ev.target.value)}
                  placeholder="category" 
                />
              </div>

              <button type="submit">Add new transaction</button>
            </form>

            <div className="transactions">
              {transactions.length > 0 && transactions.map(transaction => (
                <div className="transaction" key={transaction._id}>
                  <div className="left">
                    <div className="name">{transaction.name}</div>
                    <div className="description">{transaction.description}</div>
                    <div className="category">
                      [{transaction.category ? transaction.category : '카테고리 없음'}]
                    </div>
                  </div>
                  <div className="right">
                    <div className={"price " + (transaction.price < 0 ? 'red' : 'green')}>
                      {transaction.price}
                    </div>
                    <div className="datetime">{transaction.datetime}</div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        } />
        
        <Route path="/summary" element={<SpendingSummary transactions={transactions} />} />
      </Routes>
    </Router>
  );
}

export default App;
