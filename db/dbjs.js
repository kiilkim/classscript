function html12next() {
    prompt('html문서에서 css, font 등 효과를 주는 선언은?');
//만약 답이 head인데 다른거 쓰면 다시한번 생각해보라는 문구
    /*  if (head==true) {
        window.location.href='htmlcla12-1.html'
    } 
 */
     window.location.href='htmlcla12-1.html';
}

function html12next2() {
    prompt('제목테그는 뭘까요?');
    window.location='htmlcla12-2.html';
    

}

function html12next3() {
    prompt('내가 좋아하는 시 제목이 뭐라고?');
    window.location='htmlcla1-1.html';
}

function html1next1() {
    prompt('표를 만들고 싶다면 무슨 테그?');
    window.location='htmlcla1-2.html';
} 

function html1next2() {
    prompt('다 해보고 넘어가는거 맞죠?');
    window.location='htmlcla1-3.html';
}

function html1next3() {
    prompt('쪼까 힘들었다 그죠?, 그래도 이겨내야 합니다!');
    window.location='htmlcla1-4.html';
}
/* 여기서부터 자바 버튼 */
/* 12월버튼 */
function java12next1() {
    prompt('변수값에 올수 없는 것을 나열하시오');
    window.location='java/javacla01.html';
}
//0103jsp 버튼
function cal(a,b) {
    alert(a+b);
    alert(a-b);
    alert(a*b);
    alert(a/b);
}

function cal1(x) {
    alert("받은동전 :" + x);
    return "포카리스웨트";
}


function energy(x) {
    if (true) {
        x=1;
        alert("체력"+30+"올랐습니다.");
    }
}

function opensite() {
    window.open("http://www.naver.com")
}

function openclass() {
    window.open("jspcla01.html")
}

function address() {
    alert(location.href);
}

function address1() {
    alert("jspcla01-1.html 로 이동하겠습니다");
    location.href="jspcla01-1.html";
}
//새로고침 느낌
function reload() {
    location.reload();
}

function replace() {
    location.replace("jspcla12.html");
}

function record() {
    location.record();
}


//db버튼

function dbcla01_1next() {
    location.href="dbcla01.html";
}