# 🎨 Color Scheme Generator

Generate beautiful color schemes using [The Color API](https://www.thecolorapi.com/)! This project practices API calls with `fetch` and updates the DOM dynamically based on user input.

## Features

- Pick a base color using a color picker
- Choose from multiple color scheme types (Monochrome, Analogic, Complement, Triad, Quad, etc.)
- Instantly view a palette of 6 colors generated from your selection
- See the hex codes for each color

## Demo

![Color Scheme Generator Screenshot](/images/Screenshot%202025-08-10%20151910.png) <!-- Add screenshot if available -->

## Installation

Clone the repo and install dependencies:

```bash
npm install
npm start
```

The app uses [Vite](https://vitejs.dev/) for fast development.

## Usage

1. Select a color using the color picker.
2. Choose a scheme type from the dropdown.
3. Click **Get color Scheme** to generate your palette.
4. Copy hex codes as needed!

## How It Works

- Uses `fetch` to call [The Color API](https://www.thecolorapi.com/scheme) with your selected color and scheme.
- Updates the DOM to display the resulting colors and their hex codes.

## Technologies

- HTML, CSS, JavaScript
- Vite
- The Color API (https://www.thecolorapi.com/)

## Coder

Made by [Gab](https://github.com/CiaoGab)

- [Frontend Mentor profile](https://www.frontendmentor.io/profile/CiaoGab)

## Key Code Example

Here's a sample of the main logic, demonstrating clean code and API usage:

```js
function getScheme() {
  const hexValue = colorPicker.value.replace("#", "");
  const mode = schemeDropdown.value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode}&count=${colorColumns.length}`
  )
    .then((res) => res.json())
    .then((data) => {
      colorColumns.forEach((column, i) => {
        const hex = data.colors[i].hex.value;
        column.style.backgroundColor = hex;
        colorCodes[i].textContent = hex;
      });
    });
}
```

This function fetches a color scheme and updates the DOM with the new colors and their hex codes, showing my ability to write clean, readable code and work with APIs.

## Credits

Project by [Scrimba](https://scrimba.com/). Practice project for learning API calls and DOM manipulation.

---

Happy Coding! 💜
