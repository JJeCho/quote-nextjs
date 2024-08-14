
# Quote of the Day - Next.js Application

This project is a simple "Quote of the Day" application built with Next.js and styled using Tailwind CSS. The application fetches and displays a random quote or the quote of the day and displays an AI Generated Image using the quote as a basic prompt.

Try it here: https://quote-nextjs-2eor0qf77-jjechos-projects.vercel.app/

![A quote with an AI Generated Image](/capture.png)

## Features

- **Next.js**: A React framework for building fast web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Quote API**: A custom API route that serves a "Quote of the Day" or a random quote.
- **Component-based**: Reusable components for displaying quotes and navigation.

## Project Structure

- **`src/app`**: Contains the main application files, including the layout and page components.
  - **`api/quote-of-the-day`**: API route for fetching the Quote of the Day.
  - **`random`**: A page for displaying a random quote.
- **`src/components`**: Reusable components such as the `Navbar` and `QuoteDisplay`.
- **`public`**: Static assets like images and icons.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quote-nextjs.git
    ```
2. Navigate to the project directory:
    ```bash
    cd quote-nextjs
    ```
3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Linting

To lint the project, run:

```bash
npm run lint
# or
yarn lint
```

## Customization

- **API Integration**: Modify the API route at `src/app/api/quote-of-the-day/route.js` and the use of the api in `src/app/random/page.js` to fetch quotes from a different source or add more features.
- **Styling**: Customize the Tailwind CSS configuration in `tailwind.config.js` and styling of the components to fit your design needs.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Built with [Next.js](https://nextjs.org/)
- Styled using [Tailwind CSS](https://tailwindcss.com/)
