import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import {Link} from "react-router-dom";
import {SelectComponent} from './SelectComponent'; 
// import { open } from 'sqlite';
// import sqlite3 from 'sqlite3';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label
} from 'recharts';


export default function GraphFunction(props) {

    // d3.csv("../../static/csv/test_data.csv").then(data => {
      d3.csv("../../static/csv/" + props.filename).then(data => {
        if (data.length > 0) {
          const titles = data.columns;
          setXTitle(titles[0]);
          setYTitle(titles[1]);
          setData(data);
          
          // set domain of y axis to be 0 to max value of the data
          // const domain = d3.extent(data, d => +d[titles[1]]);
          const domain = [(d3.min(data , d => +d[titles[1]])) - 1, d3.max(data, d => +d[titles[1]]) + 1];
          setYDomain(domain);
        }
    
    }, []);


  const [data, setData] = useState([]);
  const [xTitle, setXTitle] = useState("");
  const [yTitle, setYTitle] = useState("");
  const [yDomain, setYDomain] = useState([0, 0]);
  const [filename, setFilename] = useState(props.filename);

  

        return (
            <div>
            <LineChart
                width={800 * props.width_scale}
                height={300 * props.height_scale}
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 50
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xTitle}>
                <Label value={xTitle} offset={-20} dx={-45} position="insideBottom" />
                </XAxis>
                <YAxis domain={yDomain}>
                <Label value={yTitle} angle={-90} dy={80} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Line
                type="monotone"
                dataKey={yTitle}
                stroke="#68AC67"
                activeDot={{ r: 8 }}

                // give label with title of the line
                // label={{ value: filename, position: 'top' }}
                legendType="line"
                />
            </LineChart>
            </div>
        );
    }