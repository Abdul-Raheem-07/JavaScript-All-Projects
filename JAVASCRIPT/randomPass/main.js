function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {
    if (length <= 0) {
        return "Error: Password length must be greater than 0!";
    }

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const specialchars = "!@#$%^&*()_+[]{}|;:,.<>?/`~";

    let allChars = "";

    if (includeLowercase) allChars += lowercasechars;
    if (includeUppercase) allChars += uppercasechars;
    if (includeNumbers) allChars += numberchars;
    if (includeSpecialChars) allChars += specialchars;

    if (allChars.length === 0) {
        return "Error: No character types selected!";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

document.getElementById("generateBtn").addEventListener("click", function () {
    const length = parseInt(document.getElementById("length").value);
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    const password = generatePassword(length, lowercase, uppercase, numbers, special);
    document.getElementById("result").textContent = password;
});
