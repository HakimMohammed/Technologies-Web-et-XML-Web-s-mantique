# React Client Authentication System

This project is a React-based client application designed to handle user authentication efficiently. It leverages modern libraries and tools such as TanStack Query, TanStack Router, TanStack Forms, and ShadCN to create a seamless and robust user experience.

## Features

- **User Authentication**: Secure login, registration, and logout functionality.
- **Role-Based Access Control**: Restrict access to specific routes based on user roles.
- **State Management**: Efficient state handling using TanStack Query.
- **Dynamic Routing**: Flexible and declarative routing with TanStack Router.
- **Form Handling**: Simplified form validation and submission using TanStack Forms.
- **UI Components**: Pre-styled and customizable components powered by ShadCN.

## Project Structure

```
.
├── public/               # Static assets
├── src/                  # Source code
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable UI components
│   ├── config/           # Configuration files
│   ├── context/          # React context providers
│   ├── features/         # Feature-specific modules
│   ├── hooks/            # Custom React hooks
│   ├── layouts/          # Layout components
│   ├── lib/              # Utility functions
│   ├── router/           # Application routing
│   ├── services/         # API services
│   ├── types/            # TypeScript types
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```


### Components

1. **Authentication Components**:
  - `LoginForm`: Handles user login with validation and API integration.
  - `RegisterForm`: Manages user registration with form validation.
  - `LogoutButton`: Provides a simple way for users to log out.

2. **Protected Routes**:
  - `PrivateRoute`: Ensures only authenticated users can access certain pages.
  - `AdminRoute`: Restricts access to admin-only sections.

3. **Dashboard**:
  - Displays user-specific data after successful authentication.

4. **Error Pages**:
  - Custom error pages for 404 and unauthorized access.

### Libraries and Their Usage

1. **TanStack Query**:
  - Used for data fetching, caching, and synchronization with the backend.
  - Example: Fetching user profile data after login.

2. **TanStack Router**:
  - Provides a declarative and type-safe routing solution.
  - Example: Defining routes for public, private, and admin sections.

3. **TanStack Forms**:
  - Simplifies form creation, validation, and submission.
  - Example: Validating user input in login and registration forms.

4. **ShadCN**:
  - Offers pre-styled UI components for a consistent design.
  - Example: Buttons, modals, and input fields.

## Acknowledgments

- [TanStack Query](https://tanstack.com/query)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Forms](https://tanstack.com/forms)
- [ShadCN](https://shadcn.dev)


# Angular Client Authentication System

This project is an Angular-based client application designed to handle user authentication efficiently. It leverages Angular's ecosystem and additional libraries to provide a robust and secure authentication system.

## Features
- **User Authentication**: Secure login, registration, and logout functionality.
- **Role-Based Access Control**: Restrict access to specific routes based on user roles.
- **Reactive Forms**: Form validation and submission using Angular's ReactiveFormsModule.
- **State Management**: Efficient state handling using Angular services.
- **Routing**: Declarative and type-safe routing with Angular Router.
- **Authentication Implementation**:
The angular-client handles authentication using the following:

## Packages Used:

1. **@angular/router**: For routing and guarding routes based on authentication and roles.
2. **bcryptjs**: For hashing passwords before storing them.
3. **uuid**: For generating unique user IDs.
4. **rxjs**: For handling asynchronous operations like API calls and state updates.

## Authentication Flow:

**Sign-Up**: Users register by providing their name, email, and password. Passwords are hashed using bcryptjs before being stored.
**Login**: Users log in with their email and password. The password is verified against the hashed value.
**Route Guards**: Angular Router guards ensure only authenticated users can access protected routes.

## Key Components:

- **SignUpComponent**: Handles user registration.
- **AuthService**: Manages authentication logic, including login, logout, and user state.
- **Route Guards**: Protect routes based on authentication and roles.

## Project Structure
```
angular-client/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── auth/          # Authentication components
│   │   │   ├── dashboard/     # Dashboard components
│   │   ├── services/          # Authentication and API services
│   │   ├── guards/            # Route guards
│   ├── styles.css             # Global styles
├── angular.json               # Angular configuration
├── package.json               # Project dependencies and scripts
```