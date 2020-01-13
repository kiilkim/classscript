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

//0113 jsp 실행 버튼
function radioTrans() {
     if(document.fr1.ra[0].checked==false && document.fr1.ra[1].checked==false) {
        alert("체크박스 선택하세요");
        document.fr1.ra[0].focus();
        return;
     }
     
}

function sel1() {
    alert(document.fr2.sel.name);
    alert(document.fr2.sel.type);
	alert(document.fr2.sel.length);
    alert(document.fr2.sel.selectedIndex);
    document.fr2.sel.focus()
    document.fr2.sel.blur()

}

function opt1() {
    alert(document.fr2.sel.option[0].value);
    alert(document.fr2.sel.option[0].text);
    alert(document.fr2.sel.option[0].selected); //선택이 되어있는지 되어있으면 true, false
}
//첫번째 목록선택이 되어있으면, 
function pracice() {
     if(document.fr2.sel.option[0].selected==true) {
        alert("목록선택하세요");
        document.fr2.sel.option[0].focus();
        return; 
     }

}
/* document.폼이름.목록상자이름.변수            
                                            document.fr2.sel.name
                                            document.fr2.sel.type //한개선택할건지,여러개인지
                                            document.fr2.sel.length //목록의 개수? 길이?
                                            document.fr2.sel.selectedIndex//선택되어진 순서
                                            document.fr2.sel.options[0]//목록상자의 option태그


document.폼이름.목록상자이름.options[0] //옵션이 3개니까 0,1,2번호 / 
                                            document.fr2.options[o].value
                                            document.fr2.options[o].text
                                            document.fr2.options[o].selected =>true/false값 


document.폼이름.목록상자이름.함수()
                                            document.fr2.sel.focus() //셀렉트목록상자에 들어가게끔
                                            document.fr2.sel.blur()//해제
                                             */




//db버튼

function dbcla01_1next() {
    location.href="dbcla01.html";
}