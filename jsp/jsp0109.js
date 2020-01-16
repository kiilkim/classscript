
//0109 기능

function formInfo() {
    alert(document.forms[0].action);
    alert(document.fr1.action="a.jsp");
}

function formChange() {
    document.forms[0].action="b.jsp";
    document.fr1.method="post";
    document.fr1.submit();
}

function formGet(a) {
    if(a=='basket') {
        document.fr1.action='basket.jsp';

    } else {
        document.fr1.action='order.jsp';
    }
}