//business logic


  








//user interface
$(document).ready(function () {
  $(".clickabledsg").click(function () {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  });
  $(".clickabledvp").click(function () {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  });
  $(".clickableprd").click(function () {
    $(".product-showing").toggle();
    $(".product-hidden").toggle();
  });
});

function onSubmit(event){

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let inputText = document.getElementById('input-text').value;

  if (name==null || name =="" ){
    alert("Please input your name")
  }
  else if (email==null || email==""  ){
    alert("Please input your email")
  }
  else if (inputText == null || inputText == "") {
    alert("Please iadd a message")
  }
  else{
  alert(name + " we have received your message.Thank you for reaching out to us.")
  }

  event.preventDefault()
}