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
//DOWNLOAD BUTTON
const download = document.querySelector('.download')


//RESUME OPEN--------------------------------------
resume.addEventListener('click', () =>{
    resume.style.width = 'calc(100vw + 5vmin)'
    resume.style.right = '-5vmin';
    resume.style.cursor = 'initial';
    resume.style.zIndex = '100';
    resumeHeading.style.transform = 'translateX(0)';
    setTimeout(() =>{
        resume.style.height = '100vh';
        resume.style.top = '0';
        resume.style.paddingTop = '2rem';
        resume.style.borderRadius = '0';
        resume.style.overflowY = 'scroll';
        setTimeout(() =>{
            resumeContent.style.display = 'block';
            download.style.display = 'block';
            btnCloseResume.style.display = 'block';
            setTimeout(() =>{
                resumeContent.style.transform = 'scale(1)';
            }, 0)
        }, 1000);
    }, 600);   
});

//RESUME CLOSE
btnCloseResume.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    resumeContent.style.transform = 'scale(0)';
    setTimeout(() =>{
        resume.style.height = '10vh';
        resume.style.paddingTop = '0';
        resume.style.top = 'calc(100vh - 5vmin - 60vh)'
        resume.style.borderRadius = '0 1rem 1rem 0';
        resume.style.overflowY = 'hidden';
        download.style.display = 'none';
        resumeContent.style.display = 'none'
        btnCloseResume.style.display = "none";
        setTimeout(() =>{
            resume.style.zIndex = '99'
            resume.style.right = '15vmin';
            resume.style.cursor = 'pointer';
            resumeHeading.style.transform = 'translateX(15vmin)';
        }, 1000);
    }, 500);
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
        setTimeout(() =>{
            projectsContent.style.display = 'block';
            btnCloseProjects.style.display = 'block';
            setTimeout(() =>{
                projectsContent.style.transform = 'scale(1)';
            }, 0)
        }, 1000);
    }, 600);   
});

//PROJECTS CLOSE
btnCloseProjects.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    projectsContent.style.transform = 'scale(0)';
    setTimeout(() =>{
        projects.style.height = '10vh';
        projects.style.top = 'calc(5vmin + 40vh)'
        projects.style.borderRadius = '1rem 0 0 1rem';
        projectsContent.style.display = 'none'
        btnCloseProjects.style.display = "none";
        setTimeout(() =>{
            projects.style.zIndex = '99'
            projects.style.right = '-15vmin';
            projects.style.cursor = 'pointer';
            projectsHeading.style.transform = 'translateX(-15vmin)';
        }, 1000);
    }, 500);
});
//---------------------------------------------------

//PROJECTS OPEN--------------------------------------
contacts.addEventListener('click', () =>{
    contacts.style.right = '0';
    contacts.style.cursor = 'initial';
    contacts.style.zIndex = '100';
    contactsHeading.style.transform = 'translateX(0)';
    setTimeout(() =>{
        contacts.style.height = '100vh';
        contacts.style.top = '0';
        contacts.style.borderRadius = '0';
        setTimeout(() =>{
            contactsContent.style.display = 'block';
            btnCloseContacts.style.display = 'block';
            setTimeout(() =>{
                contactsContent.style.transform = 'scale(1)';
            }, 0)
        }, 1000);
    }, 600);   
});

//PROJECTS CLOSE
btnCloseContacts.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    contactsContent.style.transform = 'scale(0)';
    setTimeout(() =>{
        contacts.style.height = '10vh';
        contacts.style.top = 'calc(5vmin + 50vh)'
        contacts.style.borderRadius = '0 1rem 1rem 0';
        contactsContent.style.display = 'none'
        btnCloseContacts.style.display = "none";
        setTimeout(() =>{
            contacts.style.zIndex = '99'
            contacts.style.right = '15vmin';
            contacts.style.cursor = 'pointer';
            contactsHeading.style.transform = 'translateX(15vmin)';
        }, 1000);
    }, 500);
});
//---------------------------------------------------