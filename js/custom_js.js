
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




/*

+++++++++++       Add Employee Radio Buttons      +++++++++++++

*/

// // Add Spouse Details
// document.addEventListener("DOMContentLoaded", function () {
//   var selectedValue = document.querySelectorAll('input[name="add-spouse"]');
//   var addSpouse = document.getElementById('add-spouse-cont');
//   console.log("Selected Value: " + selectedValue);


//   // Initial hide/show based on default selection
//   toggleDivVisibility();

//   // Add change event listener to radio buttons
//   selectedValue.forEach(function (radioButton) {
//       radioButton.addEventListener('change', function () {
//           toggleDivVisibility();
//       });
//   });

//   function toggleDivVisibility() {
//       var selectedValue = document.querySelector('input[name="add-spouse"]:checked').value;
//       if (selectedValue === 'yes') {
//           addSpouse.style.display = 'flex'; // Show div
//       } else {
//           addSpouse.style.display = 'none'; // Hide div
//       }
//   }
// });



// // Add Education Details
// document.addEventListener("DOMContentLoaded", function () {
//   var selectedValueEducation = document.querySelectorAll('input[name="add-education"]');
//   var addEducation = document.getElementById('add-eduation-cont');
//   console.log("Selected Value: " + selectedValueEducation);


//   // Initial hide/show based on default selection
//   toggleEducationVisibility();

//   // Add change event listener to radio buttons
//   selectedValueEducation.forEach(function (radioButton) {
//       radioButton.addEventListener('change', function () {
//           toggleEducationVisibility();
//       });
//   });

//   function toggleEducationVisibility() {
//       var selectedValue = document.querySelector('input[name="add-education"]:checked').value;
//       if (selectedValue === 'yes') {
//         addEducation.style.display = 'flex'; // Show div
//       } else {
//         addEducation.style.display = 'none'; // Hide div
//       }
//   }
// });
  

document.addEventListener("DOMContentLoaded", function () {
  // Define the radio button groups and their corresponding div containers
  var radioGroups = [
    { name: 'add-spouse', containerId: 'add-spouse-cont' },
    { name: 'add-education', containerId: 'add-edcuation-cont' },
    { name: 'add-address', containerId: 'add-address-cont' },
    { name: 'add-children', containerId: 'add-children-cont' },
    { name: 'add-experience', containerId: 'add-experience-cont' },
    { name: 'add-document', containerId: 'add-document-cont' },
    // Add more groups here if needed
  ];

  // Loop through each radio button group
  radioGroups.forEach(function (group) {
    var selectedValueRadios = document.querySelectorAll('input[name="' + group.name + '"]');
    var container = document.getElementById(group.containerId);

    // Initial hide/show based on default selection
    toggleVisibility(selectedValueRadios, container);

    // Add change event listener to radio buttons
    selectedValueRadios.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        toggleVisibility(selectedValueRadios, container);
      });
    });
  });

  // Function to toggle visibility based on selected radio button
  function toggleVisibility(radios, container) {
    var selectedValue = document.querySelector('input[name="' + radios[0].name + '"]:checked').value;
    if (selectedValue === 'yes') {
      container.style.display = 'flex'; // Show div
    } else {
      container.style.display = 'none'; // Hide div
    }
  }
});

