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

// useEffect(() => {

//     // (async () => {
//     //   const db = await open({
//     //     filename: '/public/test.db',
//     //     driver: sqlite3.Database
//     //   });

//     //   const rows = await db.all('SELECT * FROM your_table');
//     //   if (rows.length > 0) {
//     //     const titles = Object.keys(rows[0]);
//     //     setXTitle(titles[0]);
//     //     setYTitle(titles[1]);
//     //     setData(rows);

//     //     const domain = d3.extent(rows, d => +d[titles[1]]);
//     //     setYDomain(domain);
//     //   }

//     d3.csv("/test_data.csv").then(data => {
//       if (data.length > 0) {
//         const titles = data.columns;
//         setXTitle(titles[0]);
//         setYTitle(titles[1]);
//         setData(data);

//         const domain = d3.extent(data, d => +d[titles[1]]);
//         setYDomain(domain);
//       }
//     });
//   }, []);

export default function GraphFunction() {

    d3.csv("../../static/csv/test_data.csv").then(data => {
        if (data.length > 0) {
          const titles = data.columns;
          setXTitle(titles[0]);
          setYTitle(titles[1]);
          setData(data);
    
          const domain = d3.extent(data, d => +d[titles[1]]);
          setYDomain(domain);
        }
    
    }, []);

    // // read sqlite3 database
    // (async () => {

    //   const db = await open({
    //     filename: '/public/test.db',
    //     driver: sqlite3.Database
    //   });

    //   const rows = await db.all('SELECT * FROM your_table');
    //   if (rows.length > 0) {
    //     const titles = Object.keys(rows[0]);
    //     setXTitle(titles[0]);
    //     setYTitle(titles[1]);
    //     setData(rows);

    //     const domain = d3.extent(rows, d => +d[titles[1]]);
    //     setYDomain(domain);
    //   }

    // })();


  const [data, setData] = useState([]);
  const [xTitle, setXTitle] = useState("");
  const [yTitle, setYTitle] = useState("");
  const [yDomain, setYDomain] = useState([0, 0]);

  

        return (
            <div>
            <LineChart
                width={500}
                height={300}
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
                <Label value={xTitle} offset={-10} position="insideBottom" />
                </XAxis>
                <YAxis domain={yDomain}>
                <Label value={yTitle} angle={-90} dy={80} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Line
                type="monotone"
                dataKey={yTitle}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                legendType="none"
                />
            </LineChart>
            </div>
        );
    }
