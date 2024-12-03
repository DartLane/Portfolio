# Portfolio Project

A modern, responsive portfolio website built with React and Chakra UI, created as part of Meta's Advanced React course in the Front-End Development certification.

## Features

- **Responsive Header**
  - Social media links (GitHub, LinkedIn, Twitter, Email)
  - Navigation menu with smooth scrolling
  - Smart header that hides on scroll down and shows on scroll up

- **Landing Section**
  - Professional avatar
  - Personal introduction
  - Role description

- **Projects Section**
  - Grid layout of featured projects
  - Project cards with images, titles, and descriptions
  - Interactive hover effects

- **Contact Form**
  - Form validation using Formik and Yup
  - Fields for name, email, inquiry type, and message
  - Success/error notifications
  - Loading states during submission

## Technologies Used

- React 18
- Chakra UI
- Formik & Yup for form management
- Font Awesome icons
- Framer Motion for animations

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```
3. Start the development server:

```bash
npm start
```

## Project Structure

- `/src/components` - React components
- `/src/context` - Context providers
- `/src/hooks` - Custom React hooks
- `/src/images` - Project images and assets

## Features in Detail

### Header Component
- Dynamic visibility based on scroll direction
- Social media integration
- Smooth scroll navigation

### Projects Section
- Responsive grid layout
- Project cards with consistent styling
- Interactive elements for better UX

### Contact Form
- Form validation rules:
  - Required name field
  - Valid email verification
  - Message minimum length requirement
- Real-time validation feedback
- Success/error alerts

## Dependencies

Key dependencies include:
- @chakra-ui/react: ^2.3.2
- formik: ^2.2.9
- yup: ^0.32.11
- @fortawesome/react-fontawesome: ^0.2.0

For a complete list of dependencies, see the package.json file.

## License

This project is part of Meta's Advanced React course and is used for educational purposes.

