# AutoElite - Car E-Commerce

A React single-page application for browsing and shopping for cars online. Built with Vite, Bootstrap 5, and React Router.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router DOM 7
- **UI:** Bootstrap 5
- **Linting:** ESLint (flat config)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command            | Description                  |
| ------------------ | ---------------------------- |
| `npm run dev`      | Start dev server with HMR    |
| `npm run build`    | Production build to `dist/`  |
| `npm run preview`  | Preview production build     |
| `npm run lint`     | Run ESLint                   |

## Features

- **Product Catalog** — Browse a grid of vehicles with images, prices, descriptions, and category badges
- **Shopping Cart** — Add/remove items, adjust quantities, see live totals
- **Local Storage Persistence** — Cart state persists across sessions
- **Multi-Page Routing** — Home, About, Contact, and Cart pages
- **Responsive Design** — Mobile-friendly layout with Bootstrap 5
- **Contact Form** — Client-side form with success feedback

## Project Structure

```
src/
├── main.jsx               # Entry point
├── App.jsx                # Root component with routing and cart state
├── data.js                # Static car product data
└── components/comp/
    ├── Navbar.jsx         # Navigation bar with cart badge
    ├── ProductList.jsx    # Product grid
    ├── ProductCard.jsx    # Individual product card
    ├── Cart.jsx           # Shopping cart view
    ├── CartItem.jsx       # Cart line item
    ├── About.jsx          # About page
    ├── ContactUs.jsx      # Contact page
    └── Footer.jsx         # Footer
```

## License

MIT
