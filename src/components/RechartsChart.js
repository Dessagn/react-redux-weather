import React from 'react';
import { LineChart, Line } from 'recharts';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <LineChart data={props.data} width={120} height={180}  >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
      <div className="avrg">Avg: {average(props.data)} {props.unit} </div>
    </div>
  );
}
