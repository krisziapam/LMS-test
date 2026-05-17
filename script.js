const tutorials = [
  { role: "Student", title: "Student Access", time: "3 min", tag: "Getting started" },
  { role: "Student", title: "Access LMS Using Mobile Phone", time: "4 min", tag: "Mobile" },
  { role: "Faculty", title: "Create Quiz in LMS", time: "6 min", tag: "Assessment" },
  { role: "Faculty", title: "Create Gradebook in LMS", time: "5 min", tag: "Grades" },
  { role: "Admin", title: "Add User", time: "5 min", tag: "User management" },
  { role: "Admin", title: "Manage User Role", time: "7 min", tag: "Administration" },
  { role: "Admin", title: "Add Course", time: "4 min", tag: "Courses" },
  { role: "Faculty", title: "Use Question Bank", time: "5 min", tag: "Assessment" }
];

const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");
const tutorialGrid = document.querySelector("#tutorialGrid");
const tutorialSearch = document.querySelector("#tutorialSearch");
const filterButtons = document.querySelectorAll(".filter");
let currentRole = "All";

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

function renderTutorials() {
  const query = tutorialSearch.value.trim().toLowerCase();

  const filtered = tutorials.filter((item) => {
    const roleMatch = currentRole === "All" || item.role === currentRole;
    const text = `${item.role} ${item.title} ${item.tag}`.toLowerCase();
    return roleMatch && text.includes(query);
  });

  if (!filtered.length) {
    tutorialGrid.innerHTML = `<div class="empty-state">No tutorials found. Try another keyword or role.</div>`;
    return;
  }

  tutorialGrid.innerHTML = filtered
    .map((item) => `
      <article class="tutorial-card">
        <span class="role">${item.role}</span>
        <h3>${item.title}</h3>
        <p>${item.tag} • ${item.time}</p>
      </article>
    `)
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentRole = button.dataset.role;
    renderTutorials();
  });
});

tutorialSearch.addEventListener("input", renderTutorials);

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    item.classList.toggle("open");
  });
});

renderTutorials();
