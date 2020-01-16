

//jsp 버튼
function jsp12next() {
    a = prompt("jsp의 역할은?");
    location.href="jspcla01.html";

}
function jsp01_next() {
    a = prompt("d");
    location.href="jspcla01-1.html";

}
function jsp01_1next() {
    a = prompt("그닥 물어볼게없음..");
    location.href="jspcla01-2.html";

}function jsp01_2next() {
    a = prompt("뭔가 선택할 경우 쓰는 태그는?");
    location.href="jspcla01-3.html";

}
//jsp 다음페이지 버튼

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

//0103기능
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

//0107버튼
function fun() {
    alert(document.title);
    document.title="문서제목";

}

function fun2() {
    alert(document.bgColor);
    document.bgColor="green";
}

function fun3(c) {
    document.bgColor=c;

}
function fun4() {
    document.bgColor=d;
}

//0107이미지

 function im1(){
    alert(document.img1.src);//위치
    alert(document.img1.name);//이름
    alert(document.img1.width);//넓이
    alert(document.img1.height);//높이
    alert(document.img1.border);//굵기
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

//0113

function 
 /*  function sel1() {
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
                document.fr2.sel.focus();
                return; 
            }
    
        }

        function check() {
            if(document.fr.id.length==0==true) {
                alert("아이디입력하세요");
            }
            if(document.fr.id.pass.length==0==true) {
                alert("비밀번호입력하세요");
            }

        } */
        function check() {
            /* if(document.fr.id.value==""){
                alert("아이디 입력하세요");
                document.fr.id.focus();
                return false;
            } */
            //id라는 깃발을 찾아가는 getElementByID 
            if(document.getElementById("idd").value==""){
                alert("아이디 입력하세요");
                document.fr.id.focus();
                return false;
            }
            //false 값을 들고 넘어감, 호출하면 기억장소 생기고 그 장소에 false 값 저장
            if(document.fr.pass.value==""){
                alert("비밀번호 입력하세요");
                document.fr.pass.focus();
                return;
            }
            if(document.fr.intro.value==""){
                alert("자기소개 입력하세요");
                document.fr.intro.focus();
                return;
            }
            if(document.fr.hob[0].checked==false && document.fr.hob[1].checked==false && document.fr.hob[2].checked==false){
                alert("취미 선택하세요");
                document.fr.hob[0].focus();
                return;
            }
            if(document.fr.gen[0].checked==false && document.fr.gen[1].checked==false){
                alert("성별 선택하세요");
                document.fr.gen[0].focus();
                return;
            }
            if(document.fr.hak.options[0].selected==true){
                alert("목록선택하세요");
                document.fr.hak.focus();
                return;
            }
            // a.jsp 전송
            document.fr.submit();
        }
        

        //0114jsp기능

        