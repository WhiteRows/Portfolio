//Scroll on click each navigation link
const navLinks = document.querySelectorAll(".navigation__link");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        toggle.classList.toggle("active");
        navigation.classList.toggle("active");
        const hash = link.hash;
        setTimeout(() => {
            //Scroll to href (smoth)
            document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });
});




//Scroll on click button
const scrollBtns = document.querySelectorAll(".scroll")

scrollBtns.forEach((scrollBtn) => {
    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const hash = scrollBtn.hash;
        setTimeout(() => {
            //Scroll to href (smoth)
            document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });
});




//Modal window 
const openModals = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".modal__close-btn");
const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");

//Open modal on click for each button
openModals.forEach((openModal) => {
    openModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("active");
    });
})

//Close behavior
//Close button
closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
});

//Close on click outside of modal window
modal.addEventListener("click", () => {
    modal.classList.remove("active");
});

//Block closing when modal window clicked
modalWindow.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
});



//Show or hide additional cards
const showBtn = document.querySelector(".show-btn");
const cards = document.querySelectorAll(".card__toggle")

showBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (showBtn.innerText.toLowerCase() == "more countries") {
        showBtn.innerText = "less countries";
    } else {
        showBtn.innerText = "more countries";
    }
    cards.forEach(card => {
        card.classList.toggle("hidden")
    });
    const hash = showBtn.hash;
    setTimeout(() => {
        //Scroll to href (smoth)
        document.querySelector(hash).scrollIntoView();
    }, 0);
});



//Navbar toggle button behavior
const toggle = document.querySelector(".nav-bar__toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", (e) => {
    e.preventDefault;
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    toggle.blur()
});
