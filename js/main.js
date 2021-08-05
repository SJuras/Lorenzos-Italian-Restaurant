// dodaje class sticky na meni kada scrollas dolje
window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

// menu toggle button + mobile menu 
function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.nav');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
