const phone = document.getElementById('phone');

phone.addEventListener('focus', function() {
    if (!this.value.startsWith('+')) {
      this.value = '+' + this.value;
    }
});

phone.addEventListener('blur', function() {
  if (this.value === '+') {
    this.value = '';
  }
});

phone.addEventListener('keydown', function(event) {
  if (this.selectionStart === 1 && (event.key === 'Backspace' || event.key === 'Delete')) {
    event.preventDefault();
  }
});

phone.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9+]/g, '');

  if (this.value === '') {
    this.value = '+';
  }

const numbers = this.value.replace(/[^0-9]/g, '');
let formattedValue = '+';
  if (numbers.length > 0) {
  formattedValue += numbers.substring(0, 2);
  
  if (numbers.length > 2) {
    formattedValue += ' ' + numbers.substring(2, 4);
  }

  if (numbers.length > 4) {
    formattedValue += ' ' + numbers.substring(4, 7);
  }

  if (numbers.length > 7) {
    formattedValue += ' ' + numbers.substring(7, 11);
  }
}
this.value = formattedValue;
});