document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navMenu = document.querySelector("nav ul");
    const dropdown = document.querySelector('.dropdown');

    let lastScrollY = window.scrollY;

    // Toggle Navigation Menu on Burger Click
    function toggleNav() {
        if (window.innerWidth <= 768) {
            burgerMenu.classList.toggle("active"); // Toggle X icon
            navMenu.classList.toggle("active");    // Show/hide menu

            // If active, display menu; otherwise, hide
            if (navMenu.classList.contains("active")) {
                navMenu.style.display = "block";
            } else {
                navMenu.style.display = "none";
            }
        }
    }

    // Close the Navigation Menu
    function closeNav() {
        burgerMenu.classList.remove("active"); // Reset burger icon to ☰
        navMenu.classList.remove("active");    // Hide menu
        navMenu.style.display = "none"; // Ensure it's hidden
    }

    // Check Screen Size and Adjust Menu Display
    function checkScreenSize() {
        if (window.innerWidth > 768) {
            navMenu.style.display = "flex";  // Show menu on larger screens
        } else {
            navMenu.style.display = "none";  // Hide menu on smaller screens initially
        }
    }

    // Handle Resize
    function handleResize() {
        checkScreenSize();
        if (window.innerWidth > 768) {
            closeNav(); // Reset menu when switching to a larger screen
        }
    }

    // Handle Scroll to Close Menu
    function handleScroll() {
        if (window.innerWidth <= 768 && window.scrollY !== lastScrollY) {
            closeNav(); // Close menu & reset burger icon on scroll (only on small screens)
        }
        lastScrollY = window.scrollY;
    }

    // Toggle Dropdown Menu
    function toggleDropdown(event) {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation(); // Prevent the click event from bubbling up
    }

    // Close Dropdown if Clicked Outside
    function closeDropdown(event) {
        if (!dropdown.contains(event.target)) {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
        }
    }

    // Event Listeners
    burgerMenu.addEventListener("click", toggleNav);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    dropdown.addEventListener('click', toggleDropdown);
    document.addEventListener('click', closeDropdown);

    // Run on page load to set initial menu state
    checkScreenSize();
});
