let passwordInput = document.querySelector(".password");
function generatePassword() {
    let passwordLength = parseInt(document.querySelector(".length").value);
    let uppercase = document.querySelector(".upper").checked;
    let lowercase = document.querySelector(".lower").checked;
    let numbers = document.querySelector(".nums").checked;
    let symbols = document.querySelector(".symbols").checked;

    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numChars = "0123456789";
    let symChars = "~!@#$%^&*()_+{]}[|\:-=<>?";
    let password = "";
    let allowedChars = "";

    if (0 >= passwordLength >= 17 || passwordLength === NaN) {
        alert("Password should be of 8 - 16 characters of length !!");
        return false;
    }
    if (!uppercase && !lowercase && !numbers && !symbols) {
        alert("All checks are empty !!");
        return false;
    } else {

        if (uppercase) allowedChars += upperChars;

        if (lowercase) allowedChars += lowerChars;

        if (numbers) allowedChars += numChars;

        if (symbols) allowedChars += symChars;

        for (let i = 0; i < passwordLength; i++) {
            let randomIdx = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIdx];
        }
        showUI(password);
    }
}

function showUI(password) {
    passwordInput.value = "";
    passwordInput.value = password;
}

function copyText() {
    if (passwordInput.value === "") {
        alert("First generate password then copy !!");
        return false;
    } else {
        passwordInput.select();
        try {
            document.execCommand('copy');
            let copyBtn = document.querySelector(".copy");
            copyBtn.innerHTML = `<span>Copied !!</span>`;
            copyBtn.style.backgroundColor = "#3b3bc6";
            setTimeout(()=>{
                copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"/>
                  </svg>`;
                  copyBtn.style.backgroundColor = "#5b5bff";
            }, 1000);
        } catch (err) {
            console.error('Fallback: Failed to copy text: ', err);
        }
    }
}