import React, { useState, useEffect } from 'react';

import { CompareTable, Table } from './components';

const URL = 'https://www.mocky.io/v2/5a880f353000004f007f93c5';

function App() {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(URL);
    const parsedData = await response.json();

    setData(parsedData);
  }

  return (
    <>
      <Table data={data} setDates={setDates} />
      <CompareTable dates={dates} />
    </>
  );
}

export default App;
