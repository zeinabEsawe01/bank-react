import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './breakDown.css'
export default function Breakdown({getCatagoriesSum}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
        const result = await getCatagoriesSum();
        if (isMounted) {
          setData(result);
        }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="container">
    {data.map((d) => (
      <div className="data-item">
        <h1>{d._id}:</h1>
        <span>{d.total}</span>
      </div>
    ))}
  </div>
  )

    }
