// using selectors inside the element
const question = document.querySelectorAll(".question");

question.forEach(function (ques) {
  const btn = ques.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    question.forEach(function (item) {
      if (item !== ques) {
        item.classList.remove("show-text");
      }
    });
    ques.classList.toggle("show-text");
  });
});

// // traversing the DOM:-
// const btns = document.querySelectorAll('.question-btn')
// btns.forEach(function(btn){
//   btn.addEventListener('click',function(e){
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle('show-text')
//   })
// })
