import express from 'express';

// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from '../src/App.tsx';

const app = express()
const port = 9000

app.get('/', (req, res) => {

  res.send('Hello World!')

  // const renderedHtml = renderToString(<App />);
  // res.send(`
  //   <!DOCTYPE html>
  //   <html lang="ja">
  //   <head>
  //     <title>SSRをしよう</title>
  //   </head>
  //   <body>
  //     <div id="root">${renderedHtml}</div>
  //   </body>
  //   </html>
  // `);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
