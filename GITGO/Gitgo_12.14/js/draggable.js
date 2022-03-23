$(function(){

    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".container1");
    const button = document.querySelectorAll(".plusbutton2");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", () => {
          draggable.classList.add("dragging");
        });
      
        draggable.addEventListener("dragend", (e) => {
          draggable.classList.remove("dragging");
          console.log(e.target);
          // 움진 버튼이 속한 부모 1개 찾기
          const parent = e.target.parentElement.parentElement;
          console.log("sksksksk")
          // 위에서 찾은 부모가 몇개의 버튼을 가지고있는지
          if (parent.appendChild.length >= 2) {
            console.log("sksksksk")
            $("parent").css('border','solid 2px red');
            console.log("sksksksk")
          }else {
            $("parent").css('border','none');
          }
        });
      });
      
      containers.forEach(container => {
        container.addEventListener("dragover", e => {
          e.preventDefault();
          const draggable = document.querySelector(".dragging");
          container.appendChild(draggable);
        });
      }); 
})


