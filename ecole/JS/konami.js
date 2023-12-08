const konamiCode = [
   'ArrowUp',
   'ArrowUp',
   'ArrowDown',
   'ArrowDown',
   'ArrowLeft',
   'ArrowRight',
   'ArrowLeft',
   'ArrowRight',
   'b',
   'a'
 ];

let userInput = [];
const successMessage = document.getElementById('success-message');
const konamiImage = document.getElementById('konami-image');
const konamiTitle = document.getElementById('konami-title');
const keyHints = document.getElementById('key-hints');

function checkKonamiCode(e) {
   userInput.push(e.key);

   if (userInput.length > konamiCode.length) {
      userInput.shift();
   }

   if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
      displaySuccessMessage();
      displayKonamiImage();
      displayKonamiTitle();
      hideKeyHints();
      setTimeout(() => {
        konamiImage.style.display = 'none';
        konamiTitle.style.display = 'block';
        showKeyHints();
      }, 10000);
   }
}

function displaySuccessMessage() {
   successMessage.style.display = 'block';
}

function displayKonamiImage() {
   konamiImage.style.display = 'block';
}

function displayKonamiTitle() {
   konamiTitle.style.display = 'none';
}

function hideKeyHints() {
   keyHints.style.display = 'none';
}

function showKeyHints() {
   keyHints.style.display = 'block';
}

document.addEventListener('keydown', checkKonamiCode);
