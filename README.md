# ☕ ChaiCode Resources

**ChaiCode Resources** is a centralized platform giving students and developers **quick access to learning materials, labs, assignments, and team portfolios**. Everything is neatly organized so you can find resources efficiently.

🌐 Live Demo: https://chaicoderesources.netlify.app/

---

## 🚀 Features

* **Utility-first `chai-` CSS system**: Apply styles using expressive `chai-` classes without writing custom CSS.
* **Theme support**: Toggle between Dark Mode & Soft Mode.
* **Reusable components**: Cards, buttons, titles, hero sections.
* **Dynamic JS engine**: Automatically applies styles and removes `chai-` classes.
* **Grid-based layout**: Responsive display for multiple links.
* **Organized resources**: Websites, Labs, GitHub Repos, Assignments, Team Portfolios.

---

## 🧩 How `chai-` Classes Work

`chai-` classes are **utility-style classes** that dynamically convert class names into inline CSS:

1. **Detect Classes** – The engine scans for all `chai-` prefixed classes.

2. **Parse Names** – Maps class names to CSS properties:

   ```text
   chai-p-20         → padding: 20px
   chai-bg-black     → background-color: black
   chai-text-center  → text-align: center
   ```

3. **Apply Inline Styles** – Styles are applied dynamically and classes are removed to clean up HTML.

**Example:**

```html
<div class="chai-p-16 chai-bg-black chai-c-white chai-text-center">
  Hello ChaiCode
</div>
```

Becomes:

```html
<div style="padding: 16px; background-color: black; color: white; text-align: center;">
  Hello ChaiCode
</div>
```

---

## 🎨 Common `chai-` Classes

| Category       | Class Example         | CSS Applied               |
| -------------- | --------------------- | ------------------------- |
| **Spacing**    | `chai-p-10`           | padding: 10px             |
|                | `chai-m-20`           | margin: 20px              |
|                | `chai-px-5`           | padding-left & right: 5px |
| **Typography** | `chai-fs-18`          | font-size: 18px           |
|                | `chai-fw-bold`        | font-weight: bold         |
|                | `chai-text-center`    | text-align: center        |
| **Colors**     | `chai-c-white`        | color: white              |
|                | `chai-bg-black`       | background-color: black   |
| **Flexbox**    | `chai-d-flex`         | display: flex             |
|                | `chai-justify-center` | justify-content: center   |
|                | `chai-align-center`   | align-items: center       |
| **Size**       | `chai-w-200`          | width: 200px              |
|                | `chai-h-100`          | height: 100px             |

---

## 🖼️ Layout Sections

1. **Websites** – Courses, dashboards, coding platforms.
2. **Labs** – HTML/CSS/JS experiments, Flexbox, Grid games.
3. **GitHub Repos** – Team repos and personal GitHub profiles.
4. **Assignments & Blogs** – GitHub assignments, Masterji blogs.
5. **Eraser & Notes** – Cohort boards, slides, assignments.
6. **Team Members / Portfolios** – Quick access to ChaiCode team portfolios.

---

## ⚡ JavaScript Engine

The engine automatically:

* Detects `chai-` classes in the DOM.
* Parses and applies inline CSS.
* Toggles **Dark Mode / Soft Mode**.
* Opens card links in a new tab.

---

## 🎨 Themes

* **Dark Mode** – Default dark interface.
* **Soft Mode** – Light, soft-colored interface.
* **Persistence** – Saves the last used theme in `localStorage`.

---

## 📦 Installation

Static HTML + JS project – no build required:

```bash
git clone <your-repo-url>
```

1. Open `index.html` in a browser.
2. Make sure `main.js` is included.
3. All `chai-` classes work automatically.

---

## 📌 Future Improvements

* Responsive utilities (e.g., `md:chai-p-20`)
* Hover, focus, and state-based utilities
* Animation utilities
* Theme customization

---

## 👨‍💻 Author

**Sudhanshu Mundhe** – Creator of ChaiCSS and ChaiCode Resources.
