## Sazmining interview project

Roadmap found in the sazDemoNew.pdf

# Installation:

Everything needed is in package.json

npm install

To run in dev environment:

npm run dev

local dev environment: http://localhost:3000

To run production:

npm run build

To update API calls:

npm run codegen

CodeGen will run in terminal watching for changes and activily update the gql library.


## REQUIREMENTS:

This project fullfills the following requirements:
Select an endpoint

Use URQL to query the data
Use graphql-codegen to turn .gql files into .ts files (hint: typescript-urql)
Use NextJS, have at least 2 different pages, use NextJS v12
Use TypeScript
Use ChakraUI, to include 1 <Table> and 1 <Input> elements of your choice with whatever functionality you choose
Commit the code to a GitHub repository

Bonus:
Deploy the application to vercel
Sign your git commit(s) with your GPG key

## Challenges to overcome.

Before this challenge, I had just graduated from Nucamp Coding bootcamp. The tech stack which we developed for in class was a JavaScript framework on Bootstrap, React, React-Native, and Node.js. Our API calls were all REST API's.

I had also never done any work before in TypeScript. I just learned the basics through a LinkedIn course. And continue to learn through additional courses at totaltypescript.com.

## Tackling challenges

The first challenge was trying to get this project to work with v12 of Next.JS. I was not successful at this as I kept having issues with installation of v12 and finding adequate documentation which was unchanged to v13. To get it working in the time I had, I opted to use v13 and focus instead of other elements of the project such as the GraphQL calls.

Next.JS v13 primarily uses the /app system for navigation, instead of the prior /pages system. This also means most elements are run in a server environment. However, for many of the GraphQL elements of this project to work, they are run through the client instead(see at the top of most code pages 'use client'). See ./src/app/providers.tsx

This is the 3rd iteration of this project, as the first two became cluttered and confusing. In the 3rd iteration, I opted for quickly bootstrapping the UI with templates found at https://chakra-templates.dev/

This was so I could focus primarily on the core challenge of doing API calls through the URQL system and learn how it works, which was my greatest weakness.

I first made a REST API call so I could at least review in my head how to do so. The results of which are located in ./src/app/(dashboard)/searchTeams. These results are sourced from https://www.balldontlie.io/api/v1/players?page=1

I then was able to duplicate the layout and use a table to display results from a query using URQL in ./src/app/(dashboard)/searchRockets. Results are sourced from https://spacex-production.up.railway.app/

One issue I ran into was trying to query the data that is generated through the graphql-codegen. I hadn't realized the existence of the fuction export from ./src/lib/gql/gql.ts. So I ended up creating my own function in ./src/app/(dashboard)/searchRockets/page.tsx.

If having more time with this project. I would update the UI to reflect custom branding, make menu choices directing user attention to the most important aspects of the site, and spend more time fleshing out Typescript. 


## Default package installation README.md

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
