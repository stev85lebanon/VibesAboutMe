# Project Conventions

## Project summary

This repository contains a responsive portfolio for Mustafa Al Jamal.
It presents selected web and mobile projects, skills, and contact information.
The site is built with semantic HTML, CSS, and lightweight JavaScript.
Project and profile images are stored in `assets/`.

## Rules

1. **Names:** Use kebab-case for CSS classes and camelCase for JavaScript variables and functions. Choose descriptive names and keep existing project prefixes such as `game-`, `chat-`, and `fixhus-` consistent.
2. **Colors:** Define reusable palette colors as CSS custom properties in `:root`. Reuse those properties instead of scattering repeated color literals through the stylesheet.
3. **Indentation:** Indent HTML and JavaScript with two spaces. Keep markup and statements readable, with one main element or statement per line. When editing CSS, format the section readably; leave unrelated compact legacy rules untouched.
4. **Spelling:** Write user-facing copy in clear English. Follow the site's existing American English spelling and keep project names and technology names consistent.
5. **Comments:** Add brief comments only when they explain non-obvious intent or constraints. Do not comment on code whose purpose is already clear.
6. **Content and accessibility:** Use semantic elements, descriptive image alt text, and a logical heading order. Represent projects accurately and use their real links and screenshots when available.
7. **Never:** Add credentials or secrets, invent project features, replace real project images with misleading mockups, or add inline styles and scripts when the existing CSS and JavaScript files can be used.
