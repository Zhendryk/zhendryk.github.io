import ResumeContentCardData from "Components/Layout/ResumeContentCardData";

/*
    ABOUT
*/
export const aboutBlurb = new ResumeContentCardData(
    undefined,
    "Exploring the universe, one commit at a time...",
    undefined,
    "Versatile, efficient and reliable software engineer with a passion for design and innovative solutions. High level of achievement throughout scholastic career while balancing heavy workloads. A demonstrated leader and team-player to peers. Proficient in many development languages and paradigms, with a passion to always keep learning."
);

/*
    WORK EXPERIENCE
*/
const boseData = new ResumeContentCardData(
    "Software Engineer",
    "Bose Corporation",
    "June 2018 - Present",
    `Currently an embedded firmware developer for the "on-the-go" category of Bose Consumer Electronics, with a focus on noise cancellation technology. Prior experience within the company includes: Embedded Firmware Development - Developer for the embedded firmware for "in-the-home" consumer products, specifically: the Bose Home Speaker 300, Bose Home Speaker 500, Bose Soundbar 500 & Bose Soundbar 700. Mobile Applications Development (iOS) - Delivered AirPlay 2 support for the iOS version of the Bose Music Application. Designed and developed internal development tools related to devOps, in-app localization, etc. Cloud Platform Development - As a component owner, designed and drove the development of a new & upcoming platform on the Bose Cloud.`
);
const umassWebData = new ResumeContentCardData(
    "Web Application Developer",
    "University of Massachusetts Amherst - Computer Science Department",
    "September 2017 - June 2018",
    "Designed and developed a React/Node.js web application geared towards lecture capture and integration with universal LMS (Learning Management System) such as Moodle, Sakai, Blackboard etc. Worked with the Ripples team at UMass Amherst under Professor Timothy Richards. Personally responsible for the design and development of the entire capture scheduling system."
);
const umassDiningData = new ResumeContentCardData(
    "Dining Ambassador Data Manager",
    "University of Massachusetts Amherst - Dining Services",
    "January 2017 - May 2018",
    "As a food critic and program leader for UMass Dining Services (voted #1 best campus food in the United States), collected, analyzed and reported the feedback data for all 27 ambassadors via excel spreadsheets to Dining Services."
);
const csTutorData = new ResumeContentCardData(
    "Computer Science Tutor",
    "Self-Employed - Amherst, MA",
    "September 2014 - May 2018",
    "Independently provided paid and unpaid tutoring in various computer science classes such as Data Structures, Algorithms, Web Programming, etc."
);
const tesData = new ResumeContentCardData(
    "Game Scripting Developer",
    "TES Renewal Project - Remote",
    "June 2016 - September 2016",
    "Collaborated with a coding team creating a remake of Bethesda Studios’ 2002 title The Elder Scrolls III: Morrowind using the graphics engine of Bethesda’s 2012 title The Elder Scrolls V: Skyrim. Worked on quest redesign and implementation of scripting events using Bethesda’s native Creation Kit and Papyrus scripting language (similar to C#). Personally responsible for the redesign and implementation of the Imperial Cult Questline within the game."
);
const iosData = new ResumeContentCardData(
    "iOS Application Developer",
    "University of Massachusetts Amherst - Environmental Science Department",
    "March 2016 - June 2016",
    "Obtained paid contract from the Environmental Science department to design and develop a Swift-based iOS application. The application plots watershed mapping in the New England region and is used for planning crop planting and harvest by farmers based on location and nitrogen content in the soil."
);

export const resumeWorkExperienceData: ResumeContentCardData[] = [boseData, umassWebData, umassDiningData, csTutorData, tesData, iosData];

/*
    EDUCATION
*/
const gradData = new ResumeContentCardData(
    "Masters of Science - Computer Science",
    "Georgia Institute of Technology",
    "Spring 2020 - Present",
    "Studying for a Master’s of Science in Computer Science, concentrating in Machine Learning online while working full-time. GPA: 4.0"
);
const undergradData = new ResumeContentCardData(
    "Bachelors of Science - Computer Science",
    "University of Massachusetts Amherst",
    "2014 - 2018",
    "Concentration in Artificial Intelligence. Minor in Mathematics. Commonwealth Honors College Student. GPA: 3.46"
);

export const resumeEducationData: ResumeContentCardData[] = [gradData, undergradData];

/*
    VOLUNTEER EXPERIENCE
*/

/*
    SKILLS
*/

/*
    AWARDS
*/

/*
    INTERESTS
*/
