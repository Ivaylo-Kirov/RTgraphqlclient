import React from 'react';
import './App.css';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

function App() {
  const {loading, error, data} = useQuery(
    gql`
    {
      rates(currency:"USD") {
        currency
        rate
      }
    }
    `
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return data.rates.map(({currency, rate}) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
  ));
}

export default App;
