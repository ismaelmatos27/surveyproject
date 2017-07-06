
function survey(){
  var form = document.getElementById("form")
  var form2= document.getElementById("form2")
  // var question1=document.getElementsByClassName("q1")
  // var question2=document.getElementsByClassName("q2")
  // var question3=document.getElementsByClassName("q3")
  var answer1 = []
  var answer2 = []
  var answer3 = []
  var results = []
  var result= document.getElementById("results")
  // Loop through the questions
  for(var i=1;i<4;i++){
    // Select the question ans put it into a variable
    var question=document.getElementsByClassName("q"+i)
    // Loop through all the options of each question
    // to check is any was selected by the user
    for(var j=0;j<question.length;j++){
      if(question[j].checked && i==1){
        answer1.push(question[j].value)
      }else if(question[j].checked && i==3){
        answer3.push(question[j].value)
        }else if (question[j].selected && i==2) {
          answer2.push(question[j].value)
        }
    }


      // answer.push(results)
      // this["result"+i]=answer
      // if (answer==0|| answer==undefined){
      //
      //   result.textContent ="You forgot to answer question" + i
      //   return
      // }
    }
    if (answer1.length==0 ) {
      result.textContent ="You forgot to answer question 1"
        return

    }else if (answer2==0) {
      result.textContent ="You forgot to answer question 2"
        return

    }else if (answer3.length==0) {
      result.textContent ="You forgot to answer question 3"
        return

    }
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);

  result.textContent="Thanks for complete this survey!"
  form.reset()
  form2.reset()
}
var submit=document.getElementById("submit")
submit.addEventListener("click",survey,false)
