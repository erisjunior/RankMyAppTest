import React, { useState, useEffect } from 'react';
import { parseISO, isFuture } from 'date-fns';
import { Table as RSTable } from 'reactstrap';

const style = {
  table: {
    width: '50%'
  },
  cell: {
    cursor: 'pointer'
  }
};

export default function Table(props) {
  const [firstDate, setFirstDate] = useState({});
  const [secondDate, setSecondDate] = useState({});
  const { data, setDates } = props;

  useEffect(() => {
    const dates = [];
    const dateOne = parseISO(firstDate.formattedDate);
    const dateTwo = parseISO(secondDate.formattedDate);
    if (isFuture(dateOne, dateTwo)) {
      dates.push(firstDate);
      dates.push(secondDate);
    } else {
      dates.push(secondDate);
      dates.push(firstDate);
    }
    setDates(dates);
  }, [firstDate, secondDate]);

  function setDate(info) {
    if (isFirstDateChecked(info)) {
      setFirstDate({});
      return;
    }
    if (isSecondDateChecked(info)) {
      setSecondDate({});
      return;
    }

    firstDate.date ? setSecondDate(info) : setFirstDate(info);
  }

  function isFirstDateChecked({ date }) {
    return date === firstDate.date;
  }

  function isSecondDateChecked({ date }) {
    return date === secondDate.date;
  }

  function isDateChecked(info) {
    return isFirstDateChecked(info) || isSecondDateChecked(info) ? '- X' : '';
  }

  return (
    <RSTable dark style={style.table}>
      <thead>
        <tr>
          <th>#</th>
          <th width="70%">Data</th>
        </tr>
      </thead>
      <tbody>
        {data.map((info, i) => (
          <tr key={i} style={style.cell} onClick={() => setDate(info)}>
            <th scope="row">{i + 1}</th>
            <td>
              {info.formattedDate} {isDateChecked(info)}
            </td>
          </tr>
        ))}
      </tbody>
    </RSTable>
  );
}
