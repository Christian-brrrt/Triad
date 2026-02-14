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

                setTimeout(() => {
                    targetSection.classList.add("show");
                }, 10);
            }
        });
    });

    // =============================
    // 🔥 INVENTORY FILTER FUNCTION
    // =============================

    const filterDropdown = document.getElementById("inventoryFilter");
    const inventoryTable = document.getElementById("inventoryTable");

    if (filterDropdown && inventoryTable) {
        filterDropdown.addEventListener("change", function () {
            const selected = this.value;
            const rows = inventoryTable.getElementsByTagName("tr");

            for (let i = 1; i < rows.length; i++) {
                const statusCell = rows[i].cells[4]; // 5th column (Status)
                if (!statusCell) continue;

                const statusText = statusCell.textContent.trim();

                if (selected === "all" || statusText === selected) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        });
    }

});

});
