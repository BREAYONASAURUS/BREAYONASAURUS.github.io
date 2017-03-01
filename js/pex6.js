$(document).ready(function() {
     var date = new Date();
     var d = date.toDateString();
     var time = date.toLocaleTimeString();
     document.getElementById('dandt').innerHTML = d + ' ' + time;    	
     var message1 = parseInt("20");
     var message2 = parseInt("24");
     setTimeout(timeFunction, 1000);
     function timeFunction(){
	     var examp = document.createElement("h3");
	     var node = document.createTextNode(message1 + message2);
	     examp.appendChild(node);
	     var element = document.getElementById("test");
         element.appendChild(examp);		
		 setTimeout(timeFunction2, 2000);
	    function timeFunction2(){
		     element.removeChild(examp);
	    }
        }
	
});
function validateForm() {
    var fname = document.forms["myForm"]["firstname"].value;
	var lname = document.forms["myForm"]["lastname"].value;

    if ((fname == "")||(lname == "")) {
        alert("Must filled out all boxes");
        return false;
    }
	else{
		var yes = confirm("Ready to submit?");
		if(yes == true){
			var pword = prompt("Please enter password");
			if( pword != null){
				if(pword == "1234"){
			      alert("Thank you for submitting!");
				}
				else if(pword == ''){
					alert("Please enter password!")
				}
				else{
				   alert("Wrong password!");
				}
			}
		}
	}
}	