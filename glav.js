let b = 1;
let a = document.getElementsByTagName('body');

function smena() {
  let a = document.getElementsByTagName('body');
  //если тема светлая, меняем на темную
  if (b === 1) {
    a[0].classList.remove('light');
    a[0].classList.add('dark');
    localStorage.setItem('tema', 'dark');
    b = 0;
  }
  //если тема темная, меняем на светлую
  else if (b === 0) {
    a[0].classList.remove('dark');
    a[0].classList.add('light');
    localStorage.setItem('tema', 'light');
    b = 1;
  }
}
