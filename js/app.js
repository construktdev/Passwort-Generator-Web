function updateSliderTooltip(){
  const slider = document.getElementById("passwordlength");
  document.getElementById("sliderTooltip").textContent = slider.value;
}

function generatePassword() {
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const special = ["!", "?", "\"", "§", "$", "%", "&", "/", "(", ")", "=", "\\", "´", "", "+", "*", "~", "@", "€", "µ", "'", "#"];
  const passlength = document.getElementById("passwordlength").value;
  let password = "";
  let charsets = [];

  if (document.getElementById("lowercase").checked) {
    charsets.push(lowercase);
  }
  if (document.getElementById("uppercase").checked) {
    charsets.push(uppercase);
  }
  if (document.getElementById("numbers").checked) {
    charsets.push(numbers);
  }
  if (document.getElementById("special").checked) {
    charsets.push(special);
  }

  if (charsets.length === 0 || charsets.length === 1) {
    charsets.push(lowercase);
    charsets.push(uppercase);
  }

  for (let i = 0; i < passlength; i++) {
    const charsetIndex = Math.floor(Math.random() * charsets.length);
    const charIndex = Math.floor(Math.random() * charsets[charsetIndex].length);
    password += charsets[charsetIndex][charIndex];
  }
  console.log(password);
  document.getElementById("pwoutput").textContent = password;
}


updateSliderTooltip();
document.getElementById("passwordlength").addEventListener("input", updateSliderTooltip);
document.getElementById("generate").addEventListener("click", generatePassword);


