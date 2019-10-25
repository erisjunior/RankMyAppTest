import React, { useEffect, useState } from 'react';
import { Table as RSTable } from 'reactstrap';

const style = {
  table: {
    width: '50%'
  }
};

export default function CompareTable(props) {
  const { dates } = props;
  const [keywords, setKeywords] = useState([]);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const [firstDate] = dates;
    let apps = [];
    let keywords = [];

    if (!firstDate) {
      setApps(apps);
      setKeywords(keywords);
      return;
    }

    if (!firstDate.keywords) {
      setApps(apps);
      setKeywords(keywords);
      return;
    }

    firstDate.keywords.forEach(({ name, text }) => {
      const alreadyHasApp = apps.find(app => app === name);
      const alreadyHasKeyword = keywords.find(key => key === text);
      if (!alreadyHasApp) apps.push(name);
      if (!alreadyHasKeyword) keywords.push(text);
    });

    setApps(apps);
    setKeywords(keywords);
  }, [dates]);

  return (
    <RSTable dark style={style.table}>
      <thead>
        <tr>
          <th>#</th>
          {apps.map(app => (
            <th key={app}>{app}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {keywords.map(keyword => (
          <tr key={keyword}>
            <td>{keyword}</td>
            {apps.map((app, i) => {
              const [firstDate, secondDate] = dates;
              if (!firstDate) return null;
              if (!firstDate.keywords) return null;

              const { position: initialValue } = firstDate.keywords.find(
                ({ name, text }) => name === app && text === keyword
              );
              if (!initialValue) return <td key={i}> -</td>;

              if (!secondDate) return <td key={i}>{initialValue}</td>;
              if (!secondDate.keywords) return <td key={i}>{initialValue}</td>;

              const { position: finalValue } = secondDate.keywords.find(
                ({ name, text }) => name === app && text === keyword
              );

              const diff =
                parseInt(finalValue, 10) - parseInt(initialValue, 10);
              const diffLabel =
                diff > 0 ? `↑ ${diff}` : diff < 0 ? `↓ ${diff}` : '';

              return (
                <td key={i}>
                  {initialValue} {diffLabel}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </RSTable>
  );
}
