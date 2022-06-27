const express = require('express');
const app = express();


 // 8080 local port에 node server를 오픈한다.
app.listen(8080, () => {
    console.log('listen on 8080');
});

app.set('views',__dirname+'/views'); // 루트에 render라고 정의되어 있는 구문을 View라는 이름을 가지고 있는 폴더값을 기반으로 가져온다. 
app.set('view engine','ejs');  // ejs 엔진을 기반으로 node 를 동작시킨다. ejs=> Embedded JavaScrip.   
app.engine('html',require('ejs').renderFile);

/*
 node server 단에서, get 요청 방식
 app.get('경로','실행시킬 함수(요청, 응답)') => 형식으로 사용된다. 
 send() => 전송하고자 하는 값을 다음과 같이 지정한다. 
 render() => 전송하고자 하는 파일을 정의할 때, 다음과 같이 지정한다. 
*/

// '/' => 루트 경로를 메인에 띄우는 역할. 메인 접속시 나오는 화면을 정의할 때 '/'로 정의한다. 
//test2
app.get('/', (req, res) => {
    // res.send('hello world');
    res.render('index.html');
}
);

app.get('/about', (req, res) => {
    // res.send('hello world');
    res.render('about.html');
}
);
app.get('/test', (req, res) => {
    // res.send('hello world');
    res.render('test.html');
}
);

app.get('/test',(req, res) =>{
    res.send('get  test');
});

app.get('/test1',(req, res)=>{
    res.send('get  test1');
});

