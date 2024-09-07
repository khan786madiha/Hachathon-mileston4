// function myFunction(): void {
//     const x: HTMLElement | null = document.getElementById("myDIV");
//     if (x) {
//       if (x.style.display === "none") {
//         x.style.display = "block";
//       } else {
//         x.style.display = "none";
//       }
//     }
//   }

function myFunction(): void {
    const x: HTMLElement | null = document.getElementById("myDIV");
    if (x) {
      x.style.display = "block";
    }
  }


  document.getElementById(`resumForm`)?.addEventListener(`submit` , function(event){
    event.preventDefault();

    const textElement = document.getElementById(`text`) as HTMLInputElement
    const emailElement = document.getElementById(`email`) as  HTMLInputElement
    const passwordElement = document.getElementById(`password`) as HTMLInputElement
    const numberElement = document.getElementById(`number`) as  HTMLInputElement
    const dateElement = document.getElementById(`date`) as  HTMLInputElement
    const colorElement = document.getElementById(`color`) as  HTMLInputElement
    const rangeElement = document.getElementById(`range`) as  HTMLInputElement
    const searchElement = document.getElementById(`search`) as  HTMLInputElement
    const telElement = document.getElementById(`tel`) as  HTMLInputElement
    const urlElement = document.getElementById(`url`) as  HTMLInputElement

    if(textElement && emailElement && passwordElement && numberElement && dateElement && colorElement && rangeElement && searchElement && telElement && urlElement){

     const name = textElement.value;
      const email = emailElement.value;
      const password = passwordElement.value;
      const number = numberElement.value;
      const date = dateElement.value
      const color = colorElement.value
      const  range = rangeElement.value
      const tel = telElement.value
      const url = urlElement.value


    const resumeOutput= `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
     <p><strong>Email:</strong> ${email} </p>
      <p><strong>Pasword:</strong> ${password} </p>
       <p><strong>Name:</strong> ${number} </p>
        <p><strong>Name:</strong> ${date} </p>
         <p><strong>Name:</strong> ${color} </p>
          <p><strong>Name:</strong> ${range} </p>
           <p><strong>Name:</strong> ${url} </p>
           <p><strong>Telephone:</strong> ${tel} </p>
      
    `;


    const resumeOutputElement= document.getElementById(`resumeOutput`)
    if ( resumeOutputElement){
      resumeOutputElement.innerHTML = resumeOutput
    } else {
      console.error(`the resume output element are missing`)
    }
   } else {

      console.error (`one or more output element are missing`)
    }



  })


  // formElements.forEach((element) => {
  //   const label = document.createElement("label");
  //   label.textContent = element.label;
  //   formContainer.appendChild(label);
  
  //   let input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  
  //   switch (element.inputType) {
  //     case "text":
  //     case "email":
  //     case "password":
  //     case "number":
  //     case "date":
  //     case "color":
  //     case "range":
  //     case "search":
  //     case "tel":
  //     case "url":
  //       input = document.createElement("input");
  //       input.type = element.inputType;
  //       break;
  //     case "checkbox":
  //       input = document.createElement("input");
  //       input.type = "checkbox";
  //       break;
  //     case "radio":
  //       input = document.createElement("input");
  //       input.type = "radio";
  //       break;
  //     case "textarea":
  //       input = document.createElement("textarea");
  //       break;
  //     case "select":
  //       input = document.createElement("select");
  //       element.options.forEach((option) => {
  //         const optionElement = document.createElement("option");
  //         optionElement.value = option.value;
  //         optionElement.text = option.text;
  //         input.appendChild(optionElement);
  //       });
  //       break;
  //     case "file":
  //       input = document.createElement("input");
  //       input.type = "file";
  //       input.accept = element.accept;
  //       break;
  //   }
  
  //   input.id = element.id;
  //   input.name = element.name;
  
  //   formContainer.appendChild(input);
  // });