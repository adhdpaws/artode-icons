# Artode Icons

A premium collection of canvas-based, animated icons designed with a Swiss International Style aesthetic. These icons feature a unique "interference wave" animation effect on hover, perfect for adding a touch of sophisticated dynamism to your React applications.

## Features

- **Canvas-based Rendering**: High-performance rendering using HTML5 Canvas.
- **Interference Wave Animation**: A custom physics-inspired wave effect that activates on hover.
- **Swiss Design Aesthetic**: Minimalist, geometric, and clean.
- **Customizable**: Control size, color, stroke/fill styles, and hover states.
- **TypeScript Support**: Fully typed for seamless integration.

## Installation

```bash
npm install artode-icons
# or
yarn add artode-icons
# or
pnpm add artode-icons
```
*(Note: Ensure you have configured the registry or installed from the source as this package is currently private/local)*

## Usage

Import the icons directly from the package:

```tsx
import { AppleIcon, ReactIcon } from 'artode-icons/icons';

export default function MyComponent() {
  return (
    <div className="flex gap-4">
      <AppleIcon size={48} />
      <ReactIcon size={48} color="#61DAFB" />
      {/* Outlined version */}
      <ReactIcon size={48} drawType="stroke" />
    </div>
  );
}
```

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `32` | The width and height of the icon in pixels. |
| `color` | `string` | `'#D80018'` | The fill or stroke color of the icon. Default is Swiss Red. |
| `drawType` | `'fill' \| 'stroke'` | `'fill'` | Whether to fill the shape or draw its outline. |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the canvas element. |
| `forceHover` | `boolean` | `false` | If true, the wave animation will play continuously without hover. |

## Development

To run the development server and view the icon gallery:

```bash
npm run dev
```

## Building

To build the project:

```bash
npm run build
```

## License

[MIT](LICENSE)
