function validateApplication(){
	var name = document.getElementById("apply_name").value;
	var email = document.getElementById("apply_email").value;
	var phoneno = document.getElementById("apply_no").value;

    var selectElement = document.getElementById('apply_degree');
    var output = selectElement.value;
    text = selectElement.options[selectElement.selectedIndex].text;
	
	if (name == "" || email == "" || phoneno == "" || output == "default") {
		alert("Kindly ensure all fields are entered before sending application");
    } else {
        sendFirstMail();
        alert("Thank you for your application. You will receive an email shortly");
        sendNextMail(text);
    }
}

function sendFirstMail() {

    var params = {
        name: document.getElementById("apply_name").value,
        email: document.getElementById("apply_email").value,
    };

  const serviceID = "service_78c4nza";
  const templateID = "template_2ik2zbb";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            console.log(res);
        })
    .catch(err=>console.log(err));
}

function sendNextMail(text) {
    var params = {
        name: document.getElementById("apply_name").value,
        email: document.getElementById("apply_email").value,
        phoneno: document.getElementById("apply_no").value,
        degree: text,
  };

  const serviceID = "service_78c4nza";
  const templateID = "template_o1hvzy4";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>console.log(err));
}