
// // Collaspe SideBar
       
//         document.addEventListener("DOMContentLoaded", function () {
//             var sidebar = document.querySelector('.sidebar');
//             var mainpage = document.querySelector('.main-content');
//             var sidebarArrow = document.querySelector('.sidebar-arrow');

//             sidebarArrow.addEventListener('click', function () {
//                 sidebar.classList.toggle('collapsed-sidebar');
//                 mainpage.classList.toggle('collasped-mainpage');
//             });
//         });
    
    
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.querySelector('.sidebar');
  var mainpage = document.querySelector('.main-content');
  var sidebarArrow = document.querySelector('.sidebar-arrow');

  // Function to check screen size and collapse sidebar if below 600 pixels
  function checkScreenSize() {
      if (window.innerWidth < 600) {
          sidebar.classList.add('collapsed-sidebar');
          mainpage.classList.add('collasped-mainpage');
      }
  }

  // Initial check when DOM is loaded
  checkScreenSize();

  // Toggle sidebar collapse on arrow click
  sidebarArrow.addEventListener('click', function () {
      sidebar.classList.toggle('collapsed-sidebar');
      mainpage.classList.toggle('collasped-mainpage');
  });

  // Listen for window resize events and update sidebar accordingly
  window.addEventListener('resize', function () {
      checkScreenSize();
  });
});


//
// current date 
// 

class CurrentDate {
  constructor() {
    this.daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }

  getFormattedDate() {
    const currentDate = new Date();
    const dayOfWeek = this.daysOfWeek[currentDate.getDay()];
    const month = this.months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${dayOfWeek}, ${month} ${day}, ${year}`;
  }
}


const currentDateInstance = new CurrentDate();
const formattedCurrentDate = currentDateInstance.getFormattedDate();

// Update the content of the 'current-date' div
const currentDateDiv = document.getElementById('current-date');
currentDateDiv.textContent = formattedCurrentDate;

  
