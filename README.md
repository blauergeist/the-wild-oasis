# the-wild-oasis
A backoffice system for hotel management.

- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Demo](#demo)
- [Available Scripts](#available-scripts)
- [Getting Started](#getting-started)

## Project Structure

The `src` folder in this project is organized into several directories, each serving a specific purpose. This structured approach helps improve code organization, maintainability, and collaboration. Here's a brief explanation of each directory:

- **`context`:** This directory is dedicated to managing global state and providing context to components across the application. It contains context providers and related files.

- **`data`:** The `data` directory houses data-related logic, such as data fetching, transformations, and API integrations. Separating data-related code here promotes clean and testable data handling.

- **`features`:** The `features` directory is used for organizing the application's features or modules. Each feature has its own directory, containing components, reducers, and other relevant files. This approach encourages a modular and scalable architecture.

- **`hooks`:** The `hooks` directory is where custom React hooks reside. These hooks encapsulate reusable logic that can be shared across different components or features, promoting code reuse.

- **`pages`:** In a routing-based setup, the `pages` directory stores top-level page components, mapped to specific routes. This makes it easy to manage and navigate the main content of the application.

- **`services`:** The `services` directory contains utility functions or classes that interact with external services or APIs.

- **`styles`:** The `styles` directory holds global styles.

- **`ui`:** The `ui` directory contains reusable UI components designed to be used across different parts of the application. These components are styled and ready for integration.

- **`utils`:** The `utils` directory serves as a home for utility functions and helper modules that don't fit into other categories. These utilities can be employed throughout the application for various tasks.

This organized structure makes the project more maintainable, promotes reusability, and enhances collaboration among team members by providing a clear and consistent layout for different parts of the application.


## Dependencies
The following dependencies were used:

- **[@supabase/supabase-js](https://www.npmjs.com/package/@supabase/supabase-js):** Supabase for backend integration

- **[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query):** React Query for managing and synchronizing server state in React applications

- **[@tanstack/react-query-devtools](https://www.npmjs.com/package/@tanstack/react-query-devtools):** React Query Devtools provides a set of devtools for debugging React Query

- **[date-fns](https://www.npmjs.com/package/date-fns):** Date-fns is a library for date manipulation and formatting.

- **[react](https://www.npmjs.com/package/react):** The React library.

- **[react-dom](https://www.npmjs.com/package/react-dom):** ReactDOM for commiting DOM changes.

- **[react-error-boundary](https://www.npmjs.com/package/react-error-boundary):** React Error Boundary to gracefully handle and display errors to users.
  
- **[react-hook-form](https://www.npmjs.com/package/react-hook-form):** React Hook Form for managing form state in React applications

- **[react-hot-toast](https://www.npmjs.com/package/react-hot-toast):** React Hot Toast for displaying toasts in React applications

- **[react-icons](https://www.npmjs.com/package/react-icons):** React Icons for high-quality icons

- **[react-router-dom](https://www.npmjs.com/package/react-router-dom):** DOM bindings for React Router.

- **[recharts](https://www.npmjs.com/package/recharts):** Recharts for interactive and customizable charts and graphs

- **[styled-components](https://www.npmjs.com/package/styled-components):** Styled Components to write CSS styles with JavaScript


## Demo

You can access a live demo of this project at [https://backoffice-wild-oasis.vercel.app](https://backoffice-wild-oasis.vercel.app).

For testing purposes, you can use the following login information:

- **Email:** test@test.com
- **Password:** test123

## Available Scripts
You can run the following scripts using npm:

- **npm run dev:** Starts the development server using Vite.
- **npm run build:** Builds the project for production.
- **npm run preview:** Serves the production build for preview.

## Getting Started
To get started with development, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install project dependencies.
3. Use the available scripts mentioned above for development and building the project.
