const contents = document.querySelectorAll('.content');
//CLOSE BUTTONS
const btnCloseResume = document.querySelector('.btn-close-resume');
const btnCloseProjects = document.querySelector('.btn-close-projects');
const btnCloseContacts = document.querySelector('.btn-close-contacts');
//SECTIONS
const resume = document.querySelector('.resume');
const projects = document.querySelector('.projects');
const contacts = document.querySelector('.contacts');
//HEDINGS
const resumeHeading = document.querySelector('.heading-3--resume');
const projectsHeading = document.querySelector('.heading-3--projects');
const contactsHeading = document.querySelector('.heading-3--contacts');
//CONTENT
const resumeContent = document.querySelector('.content--resume');
const projectsContent = document.querySelector('.content--projects');
const contactsContent = document.querySelector('.content--contacts');


//RESUME OPEN--------------------------------------
resume.addEventListener('click', () =>{
    resume.style.right = '0';
    resume.style.cursor = 'initial';
    resume.style.zIndex = '100';
    resumeHeading.style.transform = 'translateX(0)';
    setTimeout(() =>{
        resume.style.height = '100vh';
        resume.style.top = '0';
        resume.style.borderRadius = '0';
        resume.style.overflowY = 'scroll';
        btnCloseResume.style.display = 'block';
        resumeContent.style.display = 'block';
        setTimeout(() =>{
            resumeContent.style.transform = 'scale(1)';
        }, 1000);
    }, 1000);   
});

//RESUME CLOSE
btnCloseResume.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    resume.style.height = '10vh';
    resume.style.top = 'calc(100vh - 5vmin - 60vh)'
    resume.style.borderRadius = '1rem';
    resume.style.overflowY = 'hidden'
    resumeContent.style.transform = 'scale(0)'
    setTimeout(() =>{
        resumeContent.style.display = 'none'
        resume.style.zIndex = '99'
        resume.style.right = '15vmin';
        resume.style.cursor = 'pointer';
        resumeHeading.style.transform = 'translateX(15vmin)';
        btnCloseResume.style.display = "none";
    }, 1000);
});
//---------------------------------------------------

//PROJECTS OPEN--------------------------------------
projects.addEventListener('click', () =>{
    projects.style.right = '0';
    projects.style.cursor = 'initial';
    projects.style.zIndex = '100';
    projectsHeading.style.transform = 'translateX(0)';
    setTimeout(() =>{
        projects.style.height = '100vh';
        projects.style.top = '0';
        projects.style.borderRadius = '0';
        btnCloseProjects.style.display = 'block';
        projectsContent.style.display = 'block'
        setTimeout(() =>{
            projectsContent.style.transform = 'scale(1)'
        }, 1000);
    }, 1000);   
});

//PROJECTS CLOSE
btnCloseProjects.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    projects.style.height = '10vh';
    projects.style.top = 'calc(5vmin + 40vh)'
    projects.style.borderRadius = '1rem';
    projectsContent.style.transform = 'scale(0)'
    setTimeout(() =>{
        projects.style.zIndex = '99'
        projects.style.right = '-15vmin';
        projects.style.cursor = 'pointer';
        projectsHeading.style.transform = 'translateX(-15vh)';
        btnCloseProjects.style.display = "none";
        projectsContent.style.display = 'none'
    }, 1000);
});
//---------------------------------------------------

//CONTACTS OPEN--------------------------------------
contacts.addEventListener('click', () =>{
    contacts.style.right = '0';
    contacts.style.cursor = 'initial';
    contacts.style.zIndex = '100';
    contactsHeading.style.transform = 'translateX(0)';
    setTimeout(() =>{
        contacts.style.height = '100vh';
        contacts.style.top = '0';
        contacts.style.borderRadius = '0';
        btnCloseContacts.style.display = 'block';
        btnCloseContacts.style.zIndex = '200';
        contactsContent.style.display = 'block'
        setTimeout(() =>{
            contactsContent.style.transform = 'scale(1)'
        }, 1000);
    }, 1000);   
});

//CONTACTS CLOSE
btnCloseContacts.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    contacts.style.height = '10vh';
    contacts.style.top = 'calc(5vmin + 50vh)'
    contacts.style.borderRadius = '1rem';
    contactsContent.style.transform = 'scale(0)'
    setTimeout(() =>{
        contacts.style.zIndex = '99'
        contacts.style.right = '15vmin';
        contacts.style.cursor = 'pointer';
        contactsHeading.style.transform = 'translateX(15vmin)';
        btnCloseContacts.style.display = "none";
        contactsContent.style.display = "none";
    }, 1000);
});
//---------------------------------------------------

