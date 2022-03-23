document.addEventListener('DOMContentLoaded', function(){
    //폼 버튼 이벤트 리스너 추가  
    document.getElementsByName('reset')[0].addEventListener('click', function(){resetForm();}); // 리셋
    document.getElementsByName('save')[0].addEventListener('click', function(){saveItem();}); // 저장
});

/* 할일 저장 */
function saveItem(){
    if(validateItemForm()){ // 폼 필드 체크 완료되었으면

// 새 아이템 템플릿 HTML 얻기
        let form = document.getElementById('newitem');
        let elem = document.createElement('div');
        elem.innerHTML = form.text.trim();
        elem.firstChild.classList.add('newitem');
        document.querySelector('.todo .content').append(elem.firstChild);

// 새 아이템 등록 날짜 얻기

        let date = new Date();

// 새 아이템 내용 생성

        document.querySelector('.newitem .todo').textContent = document.getElementsByName('todo')[0].value;
        document.querySelector('.newitem .date').textContent = 
date.getFullYear() + '-' + (date.getUTCMonth() + 1).fillZero(2) + '-' + date.getDate().fillZero(2) + ', ';
        document.querySelector('.newitem .priority').textContent = 
'중요도 ' + document.querySelector('input[name="priority"]:checked').value;

// 단계 이동 이벤트리스너 등록
        document.querySelector('.newitem .moveitem').addEventListener('click',function(e){
            moveItem(e.target);
        });
// 새 아이템 부착

        document.querySelector('.newitem').classList.remove('newitem');

        resetForm(); // 할일 목록에 등록 후 폼 초기화
    }
}

/* 양식 초기화 */
function resetForm(){
    document.getElementsByName('todo')[0].value = '';
    let radios = document.getElementsByName('priority');
    radios.forEach(function(radio){
        radio.checked = false;
    });
}

/* 폼 입력 체크 */
function validateItemForm(){
    let todo = validateItemField('todo','할일','input');
    let priority = validateItemField('priority','중요도','radio');
    if(todo == '' || priority == ''){
        return false;
    }else{
        return true;
    }
}

/* 개별 필드 입력 체크 */
function validateItemField(fieldname, label, fieldtype){
    let val = '';
    switch(fieldtype){
        case 'input':
            val = document.getElementsByName(fieldname)[0].value;
            if(val == ''){
                alert(label+' 을/를 입력해 주십시오.');
                document.getElementsByName(fieldname)[0].focus();
            }
            break;
        case 'radio':
            if(document.querySelector('input[name="'+fieldname+'"]:checked') != null){
                val = document.querySelector('input[name="'+fieldname+'"]:checked').value;
            }
            if(val == ''){
                alert(label+' 를 선택해 주십시오.');
            }
            break;
    }
    return val;
}

// 숫자 앞에 자리수만큼 0으로 채운 문자열 반환. 프로토타입으로 숫자 메써드로 구현
Number.prototype.fillZero = function(width){
    let n = String(this);//문자열 변환
    return n.length >= width ? n:new Array(width-n.length+1).join('0')+n;//남는 길이만큼 0으로 채움
}

/* 진행단계 이동 */
function moveItem(elem){
    let section = elem.parentNode.parentNode.parentNode;
    let item = elem.parentNode;
// 진행중 목록에 있을 경우 완료 단계로 이동하면서 단계 이동 화살표 삭제
    if(section.classList.contains('doing')){
        elem.remove();
    }
// 이동할 할일 아잍템을 떼어내서 다음 단계 목록에 붙임
    let ditem = item.parentNode.removeChild(item); // 떼어낸 할일 아이템을 반환 받음
    document.querySelector('.'+section.nextElementSibling.className+' .content').append(ditem);
}
