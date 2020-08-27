// let themeDot = document.getElementsByClassName('theme-dot');

// let theme = localStorage.getItem('theme');

// if (theme === null) {
//   setTheme('light');
// } else {
//   setTheme(theme);
// }

// for (var i = 0; themeDot.length > i; i++) {
//   themeDot[i].addEventListener('click', function () {
//     let mode = this.dataset.mode;
//     console.log('lol', mode);
//     setTheme(mode);
//   });
// }

// function setTheme(mode) {
//   if (mode === 'light') {
//     document.getElementById('theme-style').href = 'default.css';
//   }
//   if (mode === 'blue') {
//     document.getElementById('theme-style').href = 'blue.css';
//   }
//   if (mode === 'green') {
//     document.getElementById('theme-style').href = 'green.css';
//   }
//   if (mode === 'purple') {
//     document.getElementById('theme-style').href = 'purple.css';
//   }

//   localStorage.setItem('theme', mode);
// }

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Switch
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}
// let toggleSwitch = document.getElementsByClassName('theme-dot');

// if (toggleSwitch === null) {
//   document.documentElement.setAttribute('data-theme', 'dark');
// } else {
//   document.documentElement.setAttribute('data-theme', 'dark');
// }
// let theme = localStorage.getItem('theme');

// if (theme === null) {
//   setTheme('light');
// } else {
//   setTheme(theme);
// }
