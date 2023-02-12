// $(document).ready(function () {

//     $('#menu').click(function () {
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load', function () {
//         $('#menu').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         if (window.scrollY > 60) {
//             document.querySelector('#scroll-top').classList.add('active');
//         } else {
//             document.querySelector('#scroll-top').classList.remove('active');
//         }
//     });
// });

// document.addEventListener('visibilitychange',
//     function () {
//         if (document.visibilityState === "visible") {
//             document.title = "Projects | Portfolio Alfaizkhan Pathan";
//             $("#favicon").attr("href", "/assets/images/favicon.png");
//         }
//         else {
//             document.title = "Come Back To Portfolio";
//             $("#favicon").attr("href", "/assets/images/favhand.png");
//         }
//     });


// // fetch projects start
// function getProjects() {
//     return fetch("projects.json")
//         .then(response => response.json())
//         .then(data => {
//             return data
//         });
// }


// function showProjects(projects) {
//     let projectsContainer = document.querySelector(".work .box-container");
//     let projectsHTML = "";
//     projects.forEach(project => {
//         projectsHTML += `

//         <div class="box tilt project-card" style="width: 380px; margin: 1rem">
//       <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
//       <div class="content">
//         <div class="tag">
//         <h3 class="project-title">${project.name}</h3>
//         </div>
//         <div class="desc">
//           <p class="project-description">${project.desc}</p>
//           <div class="btns">
//             <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
//             <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
//           </div>
//         </div>
//       </div>
//     </div>`
//     });
//     projectsContainer.innerHTML = projectsHTML;



//     // isotope filter products
//     var $grid = $('.box-container').isotope({
//         itemSelector: '.grid-item',
//         layoutMode: 'fitRows',
//         masonry: {
//             columnWidth: 200
//         }
//     });

//     // filter items on button click
//     $('.button-group').on('click', 'button', function () {
//         $('.button-group').find('.is-checked').removeClass('is-checked');
//         $(this).addClass('is-checked');
//         var filterValue = $(this).attr('data-filter');
//         $grid.isotope({ filter: filterValue });
//     });
// }

// getProjects().then(data => {
//     showProjects(data);
// })
// // fetch projects end


// // disable developer mode
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }