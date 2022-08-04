import * as React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
export default function Products() {
  const { productId, testId } = useParams();
  return (
    <div>
      <h1>
        {productId} - {testId}
      </h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
