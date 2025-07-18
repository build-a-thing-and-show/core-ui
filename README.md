# Core UI

The core frontend application for build-a-thing-and-show organization. A modern React application featuring user authentication, routing, and construction notice functionality.

## 🚀 Technology Stack

- **React 18** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing and navigation
- **Bootstrap 5** + **React Bootstrap** - Responsive UI components and styling
- **Axios** - HTTP client for API communication
- **Jest** + **React Testing Library** - Comprehensive testing framework
- **ESLint** - Code quality and consistency enforcement

## ✨ Features

- **User Authentication System**
  - User login and registration
  - Password recovery functionality
  - Protected routes and navigation
- **Responsive Design** - Mobile-first approach with Bootstrap
- **Client-side Routing** - Single-page application with React Router
- **Construction Notice Management** - Core business functionality
- **404 Error Handling** - Graceful error pages for invalid routes

## 🏁 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd core-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode with hot reload |
| `npm test` | Launches test runner in interactive watch mode |
| `npm run build` | Builds the app for production with optimizations |
| `npm run lint` | Runs ESLint to check code quality and style |

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── About.js         # About page component
│   ├── ConstructionNoticeCreate.js  # Core business logic component
│   ├── ForgotPassword.js # Password recovery form
│   ├── Home.js          # Landing page (renders ConstructionNoticeCreate)
│   ├── Login.js         # User login form
│   ├── NotFound.js      # 404 error page
│   └── Register.js      # User registration form
├── App.js               # Main application with routing configuration
├── App.test.js          # Application tests
└── index.js             # Application entry point
```

### Key Routes

- `/` - Home page with construction notice functionality
- `/login` - User authentication
- `/register` - New user registration
- `/forgot-password` - Password recovery
- `/about` - About page
- `*` - 404 Not Found page

## 🛠️ Development

### Code Standards

- **ESLint Configuration**: Extends `react-app` and `react-app/jest` rulesets
- **File Naming**: Components use PascalCase (e.g., `Login.js`)
- **Code Style**: Enforced newlines at end of files (`eol-last` rule)
- **Modern JavaScript**: Latest ECMAScript features with JSX support

### Testing

Run tests with:
```bash
npm test
```

The project uses Jest and React Testing Library for unit and integration testing.

### Linting

Check code quality with:
```bash
npm run lint
```

## 🐳 Deployment

### Docker

The application is containerized with Docker:

```bash
# Build the Docker image
docker build -t core-ui .

# Run the container
docker run -p 3000:3000 core-ui
```

The Dockerfile uses Node.js 23 Alpine for a lightweight production image.

### Production Build

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with minified, production-ready files.

## 🤝 Contributing

1. **Code Quality**: Ensure all ESLint rules pass
2. **Testing**: Write tests for new features and maintain existing test coverage
3. **Components**: Follow existing component patterns and file organization
4. **Styling**: Use React Bootstrap components for consistency

### Development Workflow

1. Create a feature branch from `main`
2. Make your changes following the code standards
3. Run tests and linting: `npm test && npm run lint`
4. Create a pull request with a clear description

## 📄 License

This project is private and proprietary to the build-a-thing-and-show organization.