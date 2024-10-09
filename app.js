function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const projectBlocks = document.querySelectorAll(".details-container");
    const toggleSwitch = document.querySelector("#checkbox");
    const downloadResumeBtn = document.querySelector(".btn-color-2");
    const contactInfoBtn = document.querySelector(".btn-color-1");
    const currentTheme = localStorage.getItem("theme");

    // Apply saved theme on page load
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        document.querySelector("nav").classList.add(currentTheme);
        document.querySelectorAll("a").forEach((link) =>
            link.classList.add(currentTheme)
        );
        document.querySelector(".logo").classList.add(currentTheme);

        // Button styling based on the current theme
        if (currentTheme === "dark-mode") {
            toggleSwitch.checked = true;
            downloadResumeBtn.classList.add("dark-mode");
            contactInfoBtn.classList.add("dark-mode");
        } else {
            downloadResumeBtn.classList.add("light-mode");
            contactInfoBtn.classList.add("light-mode");
        }
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            // Enable dark mode
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            document.querySelector("nav").classList.add("dark-mode");
            document.querySelectorAll("a").forEach((link) =>
                link.classList.add("dark-mode")
            );
            document.querySelector(".logo").classList.add("dark-mode");

            // Button styles for dark mode
            downloadResumeBtn.classList.add("dark-mode");
            contactInfoBtn.classList.add("dark-mode");
            downloadResumeBtn.classList.remove("light-mode");
            contactInfoBtn.classList.remove("light-mode");

            localStorage.setItem("theme", "dark-mode");
        } else {
            // Enable light mode
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            document.querySelector("nav").classList.add("light-mode");
            document.querySelectorAll("a").forEach((link) =>
                link.classList.add("light-mode")
            );
            document.querySelector(".logo").classList.add("light-mode");

            // Button styles for light mode
            downloadResumeBtn.classList.add("light-mode");
            contactInfoBtn.classList.add("light-mode");
            downloadResumeBtn.classList.remove("dark-mode");
            contactInfoBtn.classList.remove("dark-mode");

            localStorage.setItem("theme", "light-mode");
        }
    });

    // Scroll reveal animation
    function handleScroll() {
        projectBlocks.forEach((block) => {
            const blockPosition = block.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (blockPosition < screenPosition) {
                block.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
});

// Remove hover pause on carousel and start auto-scroll
document.addEventListener("DOMContentLoaded", function () {
    const skeletonLoader = document.getElementById("skeleton-loader");

    // Hide the skeleton loader after content loads
    window.addEventListener("load", function () {
        setTimeout(() => {
            skeletonLoader.style.opacity = 0;
            skeletonLoader.style.visibility = "hidden";
        }, 1000); // Adjust the delay if necessary
    });
});
