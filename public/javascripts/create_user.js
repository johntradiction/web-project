$(() => $("#createButton").click(createUser));

function createUser() {

  const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  const validEmail = re.test($("input[name=email]").val())
  const strPhone = document.getElementById('phone').value
  const strName = document.getElementById('name').value

  if (validEmail == true && strPhone.length == 10 && strPhone[0] !=0 && strPhone[0] !=1 && strName!="") {
    const user = {
      name: $("input[name=name]")
        .val()
        .trim(),
      email: $("input[name=email]")
        .val()
        .trim(),
      phone: $("input[name=phone]")
        .val()
        .trim(),
    };

    const request = $.ajax({
      type: "post",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(user)
    });

    request.done(function(data) {
      console.log("creation done", data);
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    });
  } 
  else if (validEmail == true && strPhone.length == 10 && strPhone[0] !=0 && strPhone[0] !=1) {
    alert('You must enter a name.')
  }
  else if (validEmail == true && strName!="") {
    alert('You must enter a 10 digit phone number not beginning with 1 or 0')
  }
  else if (strPhone.length == 10 && strPhone[0] !=0 && strPhone[0] !=1 && strName!="") {
    alert('You must enter a valid email.')
  }
  else if (validEmail == true) {
    alert('You must enter a name. You must enter a 10 digit phone number not beginning with 1 or 0.' )
  }
  else if (strPhone.length == 10 && strPhone[0] !=0 && strPhone[0] !=1) {
    alert('You must enter a name. You must enter a valid email.')
  }
  else if (strName!="") {
    alert('You must enter a valid email. You must enter a 10 digit phone number not beginning with 1 or 0.')
  }
  else {
    console.log('Multiple fields have been inputted incorrectly. Please try again.')
  }
}