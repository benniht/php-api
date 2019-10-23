function animasi(){
    document.getElementById("animasi").innerHTML = "<div class='animasi'></div>";
    
}
try {
    adddlert("Welcome");
  }
  catch(err) {
    document.getElementById("demo").innerHTML =
    err.name + "<br>" + err.message;
}