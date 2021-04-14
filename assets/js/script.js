////// SELECTORS
// "Home" navigation section
const navSection = document.querySelector(".nav");

// "About Me" section
const aboutButton = document.querySelector(".btn-about");
const aboutSection = document.querySelector(".about");
const aboutClose = document.querySelector(".about__close");

// "Projects" section
const projectsButton = document.querySelector(".btn-projects");
const projectsSection = document.querySelector(".projects");
const projectsClose = document.querySelector(".projects__close");

// "Resume" section
const resumeButton = document.querySelector(".btn-resume");
const resumeSection = document.querySelector(".resume");
const resumeClose = document.querySelector(".resume__close");
const collapseResumeBtn = document.querySelector(".show-hide-btn");
const resumeDisplay = document.querySelector(".resume__display");



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
// Collapse/Uncollapse Embedded Resume
collapseResumeBtn.addEventListener("click", () => {
    collapseResume();
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
        addTabNavigation(navSection);
    } else {
        section.classList.remove("slidein");
        section.classList.add("hidden");
        section.classList.add("slideout");
        addTabNavigation(section);

        navSection.classList.remove("fadeinGrow");
        navSection.classList.add("fadeinGrow");
        navSection.classList.remove("hidden");
        navSection.classList.remove("remove-tab");
    }
};

// Collapse and uncollapse the resume on the page.
const collapseResume = () => {
    if(resumeDisplay.classList.contains("collapsed")) {
        resumeDisplay.classList.remove("collapse");
        resumeDisplay.classList.remove("collapsed");
        resumeDisplay.classList.add("uncollapse");
    } else {
        resumeDisplay.classList.remove("uncollapse");
        resumeDisplay.classList.add("collapse");
        resumeDisplay.classList.add("collapsed");
    }
};

// Required in order to keep the transition animations while removing hidden sections from tab navigtion
const addTabNavigation = (section) => {
    setTimeout(function(){ section.classList.add("remove-tab"); }, 400)
};