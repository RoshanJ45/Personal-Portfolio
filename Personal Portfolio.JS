                                          <!-- Js -->
<script src="script.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js">
    const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
</script>
<script>
    AOS.init({
        offset: 300,
        duration: 1400,
    });
</script>