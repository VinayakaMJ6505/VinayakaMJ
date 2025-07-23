document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  window.addEventListener("load", () => {
    body.classList.add("loaded");
  });

  const logoImg = document.getElementById("logo-img");
  const profileImg = document.getElementById("profile-img");
  const resumeLink = document.getElementById("resume-link");

  if (logoImg) logoImg.src = "assets/images/my-logo.png";
  if (profileImg) profileImg.src = "assets/images/profile.jpg";
  if (resumeLink) {
    resumeLink.href = "assets/resume.pdf";
    resumeLink.setAttribute("download", "resume.pdf");
  }

  const navLinks = document.querySelectorAll(".navbar a");
  const navTargets = ["home", "about", "skills", "education", "projects"];
  navLinks.forEach((link, i) => {
    if (navTargets[i]) {
      link.setAttribute("href", `#${navTargets[i]}`);
    }
  });

  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
      document.getElementById("nav-toggle").checked = false;
    });
  });

  const sections = document.querySelectorAll("section");

  const setActiveLink = () => {
    let scrollPos = window.scrollY + 150;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`.navbar a[href="#${sec.id}"]`)?.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", setActiveLink);

  const fadeEls = document.querySelectorAll(".section");
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => fadeObserver.observe(el));
});

