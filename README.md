This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Stock Search App - hence Stock Tracker or ster

### Objective

Your task is to create a simple Next.js application that allows users to search for stock quotes and display their data using the Alphavantage public data source. The application should have two views: a search view and a detail view. The search view should allow users to search for a stock by entering its symbol or name. The detail view should display information about the selected stock, including its name, symbol, current price, and any other relevant data you can obtain from the https://www.alphavantage.co/. Additionally, the search view should include a stock suggestion feature that displays a list of suggested stocks as the user types.

### Requirements

- The application should be built using Next.js and styled using CSS or TailwindCSS.
- https://www.alphavantage.co/ should be used to obtain the data for the stocks.
- The application should have two views: a search view and a detail view. Both of these should be NextJS pages.
- The search view should allow users to search for a stock by entering its symbol or name.
- The detail view should display information about the selected stock, including its name, symbol, current price, and any other relevant data you can obtain from Alphavantage. Display the data with CSS Flex or Grid system.
- The application should be responsive and mobile-friendly.
- The code should be well-organized, modular, and easy to maintain.
- The application should be deployed to a publicly accessible URL, such as Vercel.
- The code should be hosted on a public Git repository, such as GitHub. Try to maintain a clear and concise commit history.

### Bonus Points

- NextJS SSR.
- The search view should include a stock suggestion feature that displays a list of suggested stocks as the user types.
- Add a chart to the detail view that shows the stock's price history over time.
- Implement a caching mechanism to improve performance and reduce the number of API requests.
- Add a feature that allows users to save their favourite stocks and view them in a separate view.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
