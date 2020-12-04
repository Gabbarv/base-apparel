document.getElementById("bt").onclick = function() {validate()};
function validate(){
  var text = document.getElementById("email").value;
  var reg = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if(text.match(reg)){


      document.getElementById("lbl").style.visibility="visible";
        document.getElementById("lbl").innerHTML="Thank You";
  }
  else{
    document.getElementById("lbltext").style.visibility="visible";
    document.getElementById("lbl").style.visibility="visible";
  }
}
