import { projectContent } from "./data/Project-content.js";

let contents = "";

projectContent.forEach((content) => {
  contents += `         <div class="project-card">
                <div class="project-title">${content.title}</div>
                <div class="project-content">
                 ${content.content}
                </div>

                <div class="project-options">
                  <img
                    src="https://educanales.github.io/admin-dashboard/icons/star.svg"
                    alt="star"
                  />
                  <img
                    src="https://educanales.github.io/admin-dashboard/icons/eye.svg"
                    alt="eye"
                  />
                  <img
                    src="https://educanales.github.io/admin-dashboard/icons/dots.svg"
                    alt="dots"
                  />
                </div>
              </div>`;
});
document.querySelector(".project-grid").innerHTML = contents;
