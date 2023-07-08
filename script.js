let lengthSlider = document.querySelector(".pass-length input");
let generateBtn = document.querySelector(".generate-btn");
let options = document.querySelectorAll(".option input");
let copyIcon = document.querySelector(".input-box span");
let passwordInput = document.querySelector(".input-box input");

let characters = {  //object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*?:;-+.,{]}[()~`=<>/|"
}
let updateSlider = () => {
    // passing slider value as counter text
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}
let generatePassword = () => {
    let staticPassword = "";
    let randomPassword = "";
    let passLength=lengthSlider.value;
    options.forEach(option => {  // looping through each option's checkbox
        if(option.checked) {  // if checkbox is checked
            if(option.id !== "spaces"){  // if checkbox id isn't spaces
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id];
            }
            else if(option.id === "spaces"){  // if checkbox id is spaces
                staticPassword += `  ${staticPassword}  `;  // adding space at the beginning & end of staticPassword
            }
        }
    });

    for(let i=0; i<passLength; i++){
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
    }

    passwordInput.value = randomPassword;  // passing randomPassword to passwordInput value
}

let copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);  // writeText() writes the passed text to the system clipboard
    copyIcon.innerText = "check";  //changing copy icon to tick
    copyIcon.style.color = '#50C878';
    setTimeout(()=>{
        copyIcon.innerText = "copy_all"; 
        copyIcon.style.color = '#707070'; 
    },1500);   // changing tick icon to copy icon after 1500ms
}

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);
