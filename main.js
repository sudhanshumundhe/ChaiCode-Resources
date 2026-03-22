document.addEventListener("DOMContentLoaded", () => {
    const darkBtn = document.getElementById("chai-darkModeToggle");

    // Load saved mode from localStorage
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
        document.body.classList.remove("dark-mode", "soft-mode");
        document.body.classList.add(savedMode);
        darkBtn.textContent = savedMode === "dark-mode" ? "☀️" : "🌙";
    } else {
        
        darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    }

    // Dark Mod
    darkBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("soft-mode");
            darkBtn.textContent = "🌙"; 
            localStorage.setItem("themeMode", "soft-mode");
        } else {
            document.body.classList.remove("soft-mode");
            document.body.classList.add("dark-mode");
            darkBtn.textContent = "☀️"; 
            localStorage.setItem("themeMode", "dark-mode");
        }
    });

    document.querySelectorAll("a.chai-card").forEach(card => {
        const href = card.getAttribute("href");
        if (href && href !== "#") {
            card.addEventListener("click", (e) => {
                e.preventDefault();
                window.open(href, "_blank");
            });
        }
    });

    function parseSpacing(value) {
        const spacing = {
            0: "0px",
            1: "4px",
            2: "8px",
            3: "12px",
            4: "16px",
            5: "20px",
            6: "24px",
            8: "32px",
            10: "40px",
            12: "48px",
            16: "64px"
        };
        return spacing[value] ?? (!isNaN(value) ? value * 4 + "px" : value);
    }

    function runChaiEngine() {
        document.querySelectorAll('[class*="chai-"]').forEach(el => {
            el.classList.forEach(cls => {
                
            });
        });
    }

    runChaiEngine();
});