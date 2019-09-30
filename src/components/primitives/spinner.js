import React, { useEffect } from 'react';

function Spinner() {
  useEffect(() => { }, []);
  return <svg className="spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke="#343a40" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(357.407 49.9997 49.9997)">
      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
    </circle>
  </svg>;
}

export default Spinner;