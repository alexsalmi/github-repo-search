# GitHub Repository Search

A web application which allows a user to search for GitHub repositories using a simple user interface.

### README Contents

- [Running the Application Locally](#running-the-application-locally)
- [Application Structure](#application-structure)
- [Technologies Used](#technologies-used)
- [Potential Additional Features](#potential-additional-features)


## Running the Application Locally
To run this application locally, ensure you have the latest versions of [Node](https://nodejs.org/en/download) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
Once you do, clone the repository into your local machine, navigate to the cloned repository, and run the following commands:

```
npm install
npm run dev
```

Once the application has started, you will be able to view it at http://localhost:5173/

To run the test cases, you can use the below command: 
```
npm run test
```

## Application Structure
The application's root folder contains all of the configuration files needed for the application to run properly, as well as the index.html which serves the rest of the application. All of the source code can be found in the /src folder, including the index.tsx/css as the root of the project, and the Vite Typescript file. The folder structure within /src is outlined below.

### /api
Contains the logic for any API calls that need to be made, primarily the API call to the GitHub API.

### /components
Contains all of the React components used throughout the application, including the root App.tsx file. The components are separated into logical folders within.

### /hooks
Contains any custom hooks defined for the application. As of now it only contains a custom hook created for calling the GitHub API.

### /styles
Contains all css files for styling the application. The files are named corresponding to the component subfolders the apply to.

### /types
Contains all interface and type definitions used throughout the applications. Does not include component prop interfaces, as those are kept within the component files themselves.


## Technologies Used

### React Framework
The requirements for the project stated that it had to be developed using React and Typescript. To get this started, I considered a few of the different frameworks recommended on the official React docs, namely [Next.js](https://nextjs.org/), [Remix](https://remix.run/), and [Gatsby](https://www.gatsbyjs.com/). At first I was leaning towards using Next.js, but after thinking it over I decided that a Server Side Rendering framework would be overkill for this project, as most of the content would rely on client side input. Gatsby faced similar issues in that it is a static app framework and there would be a lot of dynamic data loading involved. I also decided against Remix due to my general unfamiliarity with it. In the end I decided to create a plain React application created with [Vite](https://vitejs.dev/), as the simplicity of it met all of the requirements for what would ultimately be a very straight forward project.

### Styling
Initially I wanted to handle a majority of the styling myself using either plain CSS or a modern framework like [Tailwind](https://tailwindcss.com/). However, I knew I only had a limited amount of time to complete this project, and didn't want to worry too much about styling every component to create a good user experience. Therefore, I decided to go with [MaterialUI](https://mui.com/) primarily so that I could use their pre-existing input and table components. For any styling in addition to the MUI components such as positioning the components, I opted to use plain CSS. 

### API
When reading through the GitHub API docs, I was initially planning on simply calling the API using JavaScript's built in [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), as that is what I'm most familiar with. However, I later found that the GitHub API had a dedicated SDK [Octokit](https://github.com/octokit) which I found to be very straightforward to use. What ultimately convinced me to go with Octokit was that it offered type definitions for all of the endpoints, which would make development a lot simpler, as the project requirements stated that the applicaiton had to be written in TypeScript. 

### Testing
By the time I had completed the application, I didn't have the most time left to work on the automated testing for the project. Due to this time constraint, I ended up  going with the testing framework that I'm most familiar with, [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), powered with [Vitest](https://vitest.dev/). I've found Vitest to work much more seamlessly with Vite React applications than other frameworks such as [Jest](https://jestjs.io/), which is why I chose to go with it in conjunction with RTL. If I had more time to finish out the project, I also would potentially have considered an end-to-end testing framework such as [Cypress](https://docs.cypress.io/guides/component-testing/react/overview) instead.

## Potential Additional Features
Given more time to work on the project, there are a few features that could be added to the application to improve the product:

- Repository pages - Allow users to select a repository from the list of results, opening up a page providing more info for the repo. There is plenty of data that the API returns which went unused in this application that could be displayed on these pages.

- Account integration - Allow users to sign in to their GitHub account and view/update their repositories. The API offers authentication, as well as CRUD operations on any repo the user has the corresponding access rights to.

- Improved search refinement - The API offers many more sorting and filtering options which could be utilized to allow the user to more finely search for repositories. This could also include searching for other GitHub content, such as specific issues, commits, pull requests, etc.