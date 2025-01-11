const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;

const courses = [
  { code: "CSE 110", name: "Introduction to Programming", credits: 3, completed: true },
  { code: "WDD 130", name: "Web Development Fundamentals", credits: 3, completed: true },
  { code: "CSE 111", name: "Intermediate Programming", credits: 4, completed: false },
  { code: "CSE 210", name: "Programming with Classes", credits: 4, completed: false },
  { code: "WDD 131", name: "Web Authoring", credits: 3, completed: true },
  { code: "WDD 231", name: "Web Design Principles", credits: 3, completed: false },
];

function displayCourses(filter = "all") {
  const coursesContainer = document.getElementById("courses-container");
  coursesContainer.innerHTML = ""; 

  const filteredCourses = courses.filter(course => {
    if (filter === "all") return true;
    if (filter === "CSE") return course.code.startsWith("CSE");
    if (filter === "WDD") return course.code.startsWith("WDD");
  });

  filteredCourses.forEach(course => {
    const courseCard = document.createElement("button");
    courseCard.classList.add("course-btn");
    if (!course.completed) courseCard.classList.add("incomplete");
    courseCard.textContent = `${course.code} (${course.credits} credits): ${course.name}`;
    coursesContainer.appendChild(courseCard);
  });

  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  const creditsElement = document.getElementById("total-credits");
  creditsElement.textContent = `Total Credits: ${totalCredits}`;
}

document.getElementById("filter-all").addEventListener("click", () => displayCourses("all"));
document.getElementById("filter-cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("filter-wdd").addEventListener("click", () => displayCourses("WDD"));

displayCourses("all");
