# Frontend technical test

### Description

The goal for this project was to

1. Provide leboncoin user a responsive messaging application
2. Retrieve the user conversations and display them as a list
3. Allow the user to select a conversation to access to the related messages
4. Allow the user to create new messages
5. Allow the user to create new conversations

---

### Tools

For this project I used `React`, `Immer` and the `useReducer` hook to manage the stores that I pass through the app via the `React context API`.\
I choose `Kendo` to display the messages box.\
For the UI, I used `Reactstrap` and `Styled Components`.\
I also used `Jest` and `React testing library` for the testing part.

---

### Available Scripts

Before you can run any scripts below install the project with the command below:

```
git clone https://github.com/virginieky/frontend-technical-test.git
```

Once you have cloned the repo you must run the command below to install all the dependencies:

```
npm install
```

To run the app in the development mode:

```
npm run start
```

Then, open [http://localhost:3000](http://localhost:3000/) to view it in the browser.\
The page will reload if you make edits.
<br/><br/>

Start the API server on port 3005:

```
npm run start-server
```

To launch the test runner in the interactive watch mode, you can run in the project directory:

```
npm run test
```

The unit tests cover the whole application. You can get the coverage details by running:

```
npm run test:coverage
```

This command will build the application for production into the dist folder:

```
npm run build
```
