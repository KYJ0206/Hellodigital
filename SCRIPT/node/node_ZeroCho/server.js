const express = require('express');
const path = require('path');
const app = express();
const route = require('./route.js');
app.set('view engine', 'pug'); // (1)
app.set('views', path.join(__dirname, 'html')); // (2)

// 업데이트 콘솔
app.use((req, res, next) => {
  console.log('UPDATE COMPLETE');
  next();
});

app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);

app.use((req, res, next) => { // 404 처리 부분
  res.status(404).send('일치하는 주소가 없습니다!');
});

app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
});

app.listen(8080, () => {
  console.log('Express App on port 8080!');
});