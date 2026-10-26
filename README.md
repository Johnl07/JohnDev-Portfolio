# Minimalist Web Portfolio

A clean, semantic, and responsive personal portfolio template built using fundamental web standards. Designed with human-first typography, an editorial grid layout, and a custom purple-lavender color palette—avoiding generic AI template clichés.

## Description
This project serves as a clean portfolio template to showcase coursework, lab activities (Midterms & Finals), technical skills, and personal projects. It emphasizes speed, accessibility, readability, and effortless customization without heavy frameworks or bloated dependencies.

### Color Palette
- **Deep Plum**: `#4C2365` (rgb: `76, 35, 101`)
- **Medium Violet**: `#7F5D99` (rgb: `127, 93, 153`)
- **Soft Lavender**: `#9E7EB5` (rgb: `158, 126, 181`)
- **Pastel Lilac**: `#C4A4DA` (rgb: `196, 164, 218`)

## Tech Stack
- **HTML5**: Semantic tags, accessible landmarks, and clean structure.
- **CSS3**: Modern Flexbox, CSS Grid, custom properties (CSS variables), and media queries.
- **JavaScript (Vanilla ES6)**: Lightweight interactions (work filtering, mobile navigation, smooth scrolling, theme adjustments).

## Setup Instructions

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/Johnl07/JohnDev-Portfolio.git
   cd "My Portfolio"
   ```

2. **Environment Configuration (Optional):**
   Copy the example environment file if integrating external backends or local static servers:
   ```bash
   cp .env.example .env
   ```

3. **Running Locally:**
   - Simply open `index.html` directly in any web browser.
   - Alternatively, use VS Code's **Live Server** extension or run a lightweight local server:
     ```bash
     # Using Python
     python -m http.server 3000

     # Using Node.js (npx)
     npx serve .
     ```

## Usage
- **Personalize Content**: Edit `index.html` to update your name, bio, education, project details, and social links.
- **Update Works/Activities**: Add or modify items in the `#works` section. Data filter categories (`all`, `midterm`, `finals`, `personal`) can be adjusted directly via `data-category` attributes.
- **Update Avatar**: Replace `public/images/profile.jpg` with your desired headshot or portrait.
- **Customize Styling**: Fine-tune colors and typography in `src/css/style.css` using the `:root` variables.

## Contributing
Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for branch policies, commit standards, and pull request procedures.
