import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';

function Hello() {
  return <div>Hello from React.</div>;
}

ReactDom.render(<Hello />, document.getElementById('app'));
