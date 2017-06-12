var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

function createForm(){
  var formNode = document.querySelector('.signup');
  formNode.setAttribute("action", "");
  formNode.setAttribute("method", "post");

  var header = document.createElement('div');
  header.className = "form-header";
  formNode.appendChild(header);
  var message = document.createElement('p');
  message.textContent = "Sign Up For My Web App";
  header.appendChild(message);

  for (var i = 0; i < formData.length; i++) {
    var input = formData[i];
    var newInput;
    var imgspan;
    var inputDiv = document.createElement('div');
    inputDiv.className = "input-div";
    formNode.appendChild(inputDiv);
    if (input.type == 'select'){
      newInput = document.createElement('select');
      newInput.setAttribute("id", input.id);
      inputDiv.appendChild(newInput);
      var newOption = document.createElement('option');
      newOption.innerHTML = input.label;
      newInput.appendChild(newOption);
      for (var t = 0; t < input.options.length; t++) {
        newOption = document.createElement('option');
        newOption.setAttribute("value", input.options[t].value);
        newOption.innerHTML = input.options[t].value;
        newInput.appendChild(newOption);
      }
    } else if (input.type == 'textarea') {
        imgspan = document.createElement('span');
        imgspan.className = 'fa' + ' ' + input.icon;
        inputDiv.appendChild(imgspan);
        newInput = document.createElement('textarea');
        newInput.setAttribute("placeholder", input.label);
        newInput.setAttribute("id", input.id);
        inputDiv.appendChild(newInput);
    } else {
        imgspan = document.createElement('span');
        imgspan.className = 'fa' + ' ' + input.icon;
        inputDiv.appendChild(imgspan);
        newInput = document.createElement('input');
        newInput.setAttribute("id", input.id);
        newInput.setAttribute("type", input.type);
        newInput.setAttribute("placeholder", input.label);
        inputDiv.appendChild(newInput);
    }

  }
  var footer = document.createElement('div');
  footer.className = "form-footer";
  formNode.appendChild(footer);
  var button = document.createElement('button');
  button.innerHTML = "Submit Form";
  footer.appendChild(button);


}


createForm();
