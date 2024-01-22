import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.tsx';

const app = express()
const port = 9000

app.get('/', (req, res) => {
  const content = renderToString(<App />);
  res.send(`
    <html>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
