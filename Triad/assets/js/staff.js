document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".section");

    // hide everything on load
    sections.forEach(s => s.classList.remove("show"));

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            // active state
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // hide all sections
            sections.forEach(s => s.classList.remove("show"));

            // show target
            const target = document.getElementById(btn.dataset.target);
            if (target) {
                target.classList.add("show");
            }
        });
    });

    loadProducts();
    loadInventory();
});
