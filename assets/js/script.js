////// SELECTORS
//// Home navigation section
const navSection = document.querySelector(".nav");
const aboutButton = document.querySelector(".btn-about");
const projectsButton = document.querySelector(".btn-projects");
const resumeButton = document.querySelector(".btn-resume");

//// About Me section
const aboutSection = document.querySelector(".about");
const aboutClose = document.querySelector(".about__close");

//// Projects section
const projectsSection = document.querySelector(".projects");
const projectsClose = document.querySelector(".projects__close");

//// Resume section
const resumeSection = document.querySelector(".resume");
const resumeClose = document.querySelector(".resume__close");
const collapseResumeBtn = document.querySelector(".show-hide-all");
const resumeDisplay = document.querySelector(".resume__display");
// Certification section
const collapseCertsBtn = document.querySelector(".show-hide-certs");
const certsSection = document.querySelector(".resume__display__certs");
// Career section
const collapseCareerBtn = document.querySelector(".show-hide-career");
const careerSection = document.querySelector(".resume__display__career");
// Education section
const collapseEducationBtn = document.querySelector(".show-hide-education");
const educationSection = document.querySelector(".resume__display__education");
// Array containing all sections
const resumeSections = [certsSection, careerSection, educationSection];



//////// EVENT LISTENERS
///// About Me
// Open Section
aboutButton.addEventListener("click", () => {
    showHideSections(aboutSection);
});
// Close Section
aboutClose.addEventListener("click", () => {
    showHideSections(aboutSection);
});

///// Projects
// Open Section
projectsButton.addEventListener("click", () => {
    showHideSections(projectsSection);
});
// Close Section
projectsClose.addEventListener("click", () => {
    showHideSections(projectsSection);
});

///// Resume
// Open Section
resumeButton.addEventListener("click", () => {
    showHideSections(resumeSection);
});
// Close Section
resumeClose.addEventListener("click", () => {
    showHideSections(resumeSection);
});
// Collapse All Resume Sections
collapseResumeBtn.addEventListener("click", () => {
    collapseAllSections();
});
// Collapse Certifications
collapseCertsBtn.addEventListener("click", () => {
    collapseResumeSection(certsSection);
});
// Collapse Work Experience
collapseCareerBtn.addEventListener("click", () => {
    collapseResumeSection(careerSection);
});
// Collapse Education
collapseEducationBtn.addEventListener("click", () => {
    collapseResumeSection(educationSection);
});



////// FUNCTION DECLARATIONS
// Shows or hides a section depending on which button is clicked, as well as toggles transition animations
const showHideSections = (section) => {
    if (section.classList.contains("hidden")){
        section.classList.remove("remove-tab");
        section.classList.remove("slideout");
        section.classList.remove("hidden");
        section.classList.add("slidein");

        navSection.classList.remove("fadeinGrow");
        navSection.classList.add("fadeoutShrink");
        navSection.classList.add("hidden");
        removeTabNavigation(navSection);
    } else {
        section.classList.remove("slidein");
        section.classList.add("hidden");
        section.classList.add("slideout");
        removeTabNavigation(section);

        navSection.classList.remove("fadeinGrow");
        navSection.classList.add("fadeinGrow");
        navSection.classList.remove("hidden");
        navSection.classList.remove("remove-tab");
    }
};

// Collapse and uncollapse all resume sections.
const collapseAllSections = () => {
    if(certsSection.classList.contains("collapsed") || careerSection.classList.contains("collapsed") || educationSection.classList.contains("collapsed")) {
        for(let i = 0; i < resumeSections.length; i++){
            resumeSections[i].classList.remove("collapse");
            resumeSections[i].classList.remove("collapsed");
            resumeSections[i].classList.add("uncollapse");
            resumeSections[i].classList.remove("remove-tab");
        };
    } else {
        for(let i = 0; i < resumeSections.length; i++){
            resumeSections[i].classList.remove("uncollapse");
            resumeSections[i].classList.add("collapse");
            resumeSections[i].classList.add("collapsed");
            removeTabNavigation(resumeSections[i]);
        };
    };
};

// Collapse and uncollapse individual resume sections.
const collapseResumeSection = (resumeSection) => {
    if(resumeSection.classList.contains("collapsed")) {
        resumeSection.classList.remove("collapse");
        resumeSection.classList.remove("collapsed");
        resumeSection.classList.add("uncollapse");
        resumeSection.classList.remove("remove-tab");
    } else {
        resumeSection.classList.remove("uncollapse");
        resumeSection.classList.add("collapse");
        resumeSection.classList.add("collapsed");
        removeTabNavigation(resumeSection);
    };
};

// Required in order to keep the transition animations while removing hidden sections from tab navigtion.
const removeTabNavigation = (section) => {
    setTimeout(function(){ section.classList.add("remove-tab"); }, 400)
};
