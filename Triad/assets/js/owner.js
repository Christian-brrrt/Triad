document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".section");

    // Hide all sections on load
    sections.forEach(section => {
        section.style.display = "none";
        section.classList.remove("show");
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // Active button
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove("show");
                section.style.display = "none";
            });

            // Show target section
            const targetId = button.dataset.target;
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.style.display = "block";

                // allow display before animation
                setTimeout(() => {
                    targetSection.classList.add("show");
                }, 10);
            }
        });
    });
});
