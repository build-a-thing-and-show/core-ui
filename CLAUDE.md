# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `core-ui`, the core frontend application for the organization. It's a React application bootstrapped with Create React App, featuring authentication components and basic routing.

## Development Commands

- `npm start` - Start development server on http://localhost:3000
- `npm test` - Run tests in interactive watch mode
- `npm run build` - Build for production
- `npm run lint` - Lint source code with ESLint

## Architecture

### Application Structure
- React 18 with React Router DOM for client-side routing
- Component-based architecture with all components in `src/components/`
- Main routes: Home (`/`), Login (`/login`), Register (`/register`), Forgot Password (`/forgot-password`), About (`/about`)
- 404 handling via NotFound component

### Key Components
- `App.js` - Main routing configuration using React Router
- `Home.js` - Landing page that renders ConstructionNoticeCreate component
- Authentication components: `Login.js`, `Register.js`, `ForgotPassword.js`
- `ConstructionNoticeCreate.js` - Core functionality component (purpose TBD)

### Dependencies
- **axios** - HTTP client for API calls
- **react-router-dom** - Client-side routing
- **@testing-library/react** and **jest** - Testing framework

### Code Standards
- ESLint configuration with React and React Hooks plugins
- Enforces newlines at end of files (`eol-last` rule)
- Uses latest ECMAScript features with JSX support

### Deployment
- Dockerized with Node 23 Alpine base image
- Exposes port 3000
- Production builds optimized and minified