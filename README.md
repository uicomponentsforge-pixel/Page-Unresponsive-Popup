# Page Unresponsive Overlay

A lightweight web page component that simulates a browser "Page Unresponsive" dialog when exit intent is detected.

## Overview

This project provides a simple modal/overlay interface styled to resemble an unresponsiveness warning popup. It detects when a user moves their mouse pointer out of the browser window towards the top (exit intent) and displays a modal dialog with two choices:
- **Wait**: Closes the overlay and lets the user remain on the page.
- **Exit Page**: Redirects the user away (defaulting to Google).

## Project Structure

- `index.html` - Contains the HTML structure of the page and the modal overlay popup.
- `style.css` - Provides the styling for the modal overlay and buttons.
- `script.js` - Contains the event listener logic for exit intent detection and button actions.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Move your mouse cursor up out of the top of the viewport to trigger the exit intent modal overlay.
