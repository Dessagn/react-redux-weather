import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}


export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} width={200} height={120}  >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="avrg">Avg: {average(props.data)} {props.unit} </div>
    </div>
  );
}
