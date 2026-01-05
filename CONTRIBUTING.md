# Contributing to Artode Icons

Thank you for your interest in contributing to Artode Icons! We welcome contributions from the community to help make this project better.

## How to Contribute

### 1. Fork the Repository
Fork the repo to your own GitHub account and clone it to your local machine.

### 2. Create a Branch
Create a new branch for your feature or bug fix:
```bash
git checkout -b feature/my-new-icon
```

### 3. Add Your Changes
- **Adding a New Icon**: 
    - Add the new icon component in `icons/`.
    - Ensure it uses the `ArtodeIcon` wrapper.
    - Export it in `icons/index.ts`.
    - Add the raw SVG path to the component.
- **Fixing Bugs**: Make sure to test your changes.

### 4. Run Checks
Before submitting, please run the linting and style checks to ensure code quality:
```bash
npm run lint
```

### 5. Commit and Push
Commit your changes with a descriptive message and push to your fork.

### 6. Submit a Pull Request
Open a Pull Request against the `main` branch. Provide a clear description of your changes and any relevant context.

## Style Guide

- **Code Style**: We follow standard React and TypeScript best practices.
- **Naming**: Icon components should be PascalCase and suffixed with `Icon` (e.g., `MyIcon`).
- **Files**: Filenames should be kebab-case (e.g., `my-icon.tsx`).

## Reporting Issues

If you find a bug or have a feature request, please open an issue in the repository. Provide as much detail as possible to help us understand and resolve the problem.

Thank you for contributing!
