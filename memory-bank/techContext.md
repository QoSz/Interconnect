# Technical Context: Interconnect

## Technology Stack

### Core Framework
- **Next.js 15.3.1**: Modern React framework with server and client components
- **React 19.1.0**: UI library for component-based development
- **TypeScript**: For type safety and improved developer experience

### Styling & UI
- **TailwindCSS 4.0.17**: Utility-first CSS framework
- **clsx & tailwind-merge**: For conditional class composition
- **Radix UI**: Headless UI components (accordion, dialog, dropdown, etc.)
- **Lucide React**: Icon library
- **Framer Motion**: Animation library for advanced animations

### Build Tools
- **TurboPack**: Bundler used for faster development experience
- **PostCSS**: For processing CSS

### Development Environment
- **Linux**: Development on Linux 6.14.4-300.fc42.x86_64
- **Node.js**: JavaScript runtime
- **npm**: Package manager

## Technical Constraints

### Performance Requirements
- Fast initial page load (< 2s target)
- Responsive on all device sizes
- Smooth animations (60fps)
- Optimized assets for minimal loading times

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- No specific IE11 support required

### Accessibility Requirements
- WCAG 2.1 AA compliance target
- Keyboard navigation support
- Screen reader compatibility
- Proper contrast ratios

### SEO Requirements
- Semantic HTML structure
- Proper meta tags and descriptions
- Optimized for search engines
- Social media sharing capabilities

## Development Setup

### Local Development
```bash
# Install dependencies
npm install

# Run development server with TurboPack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Project Structure
- `/src/app`: Page routes and layouts
- `/src/components`: UI components organized by feature
- `/src/lib`: Utility functions and shared code
- `/public`: Static assets

## Deployment Strategy
- Deployment platform: Not specified yet (likely Vercel)
- CI/CD pipeline: Not implemented yet
- Environment strategy: Development/Production

## Technical Debt & Limitations
- No backend implementation yet
- Form submissions not connected to any service
- Content is static, no CMS integration
- No analytics implementation
- Testing framework not set up

## Future Technical Roadmap
- Add form submission handling
- Implement automated testing
- Set up analytics
- Optimize for Core Web Vitals
- Add internationalization support if needed 