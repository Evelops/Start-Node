const express = require('express');
const app = express();

//node server 오픈하기 위한 기본 구문.

app.listen(8080, function(){
    console.log('listen on 8080');
}); // 8080 local port에 node server를 오픈한다.

// node server 단에서, get 요청 방식
// app.get('경로','실행시킬 함수(요청, 응답)') => 형식으로 사용된다. 
// 응답.send() => 전송하고자 하는 값을 다음과 같이 지정한다. 
app.get('/test',function(req,res){
    res.send('get  test');
});

app.get('/test1',function(req,res){
    res.send('get  test1');
});

