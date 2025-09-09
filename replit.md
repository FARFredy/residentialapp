# Overview

This is a residential property management application ("propiedad horizontal" in Spanish) designed to help manage condominiums, apartment complexes, or similar residential communities. The project appears to be in early development stages with a React-based frontend prototype being built using modern web technologies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18.3.1 with modern hooks and functional components
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Material-UI (MUI) v6 for consistent design system and pre-built components
- **Styling**: 
  - Tailwind CSS for utility-first styling approach
  - Emotion for CSS-in-JS styling (required by MUI)
  - Tailwind Animate for smooth animations
- **Development Tools**: 
  - ESLint for code quality and consistency
  - Hot Module Replacement (HMR) for fast development feedback
  - Source locator plugin for debugging

## Backend Architecture
- **Database**: Supabase integration for backend-as-a-service
  - Real-time database capabilities
  - Built-in authentication and authorization
  - RESTful API with automatic generation
  - Row Level Security (RLS) for data protection

## Development Environment
- **Server Configuration**: 
  - Development server runs on port 5000
  - Configured for external access (host: 0.0.0.0)
  - HMR client port set to 443 for production-like environments
- **Module System**: ES modules with modern JavaScript features
- **Testing**: Jest framework configured for unit and integration testing

## Design Patterns
- **Component-Based Architecture**: Modular React components for reusability
- **Utility-First Styling**: Tailwind CSS for rapid UI development
- **Real-time Data**: Supabase real-time subscriptions for live updates
- **Type Safety**: TypeScript support with proper type definitions

# External Dependencies

## Backend Services
- **Supabase**: Primary backend service providing:
  - PostgreSQL database with real-time capabilities
  - Authentication and user management
  - File storage and CDN
  - Edge functions for serverless computing
  - Automatic API generation

## UI and Styling Libraries
- **Material-UI (MUI)**: Complete React component library for professional UI design
- **Emotion**: CSS-in-JS library for styled components (MUI dependency)
- **Tailwind CSS**: Utility-first CSS framework for custom styling
- **Tailwind Animate**: Animation utilities for enhanced user experience

## Development Tools
- **Vite**: Modern build tool and development server
- **ESLint**: Code linting and formatting for JavaScript/React
- **Jest**: Testing framework for unit and integration tests
- **PostCSS**: CSS processing tool (required for Tailwind)
- **Autoprefixer**: CSS vendor prefixing for browser compatibility

## Development Plugins
- **@vitejs/plugin-react**: Official Vite plugin for React support
- **@metagptx/vite-plugin-source-locator**: Development debugging tool for component location