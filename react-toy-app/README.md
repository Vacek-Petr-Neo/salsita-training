# React Training: Pokedex 
This project is intended for you to get your feet wet with react.  We're going
to build a pokedex to track different kinds of pokemon, along with their levels
and types.  Note!! This is still a work in progress, so not all the features
and prompts will be built out yet.

You can find the wireframes of what the app should look like here:
https://docs.google.com/presentation/d/1yy0I5hyKCZwIYyidZSoKeJH0XlnJqCEc5MrBYVeV5EI/edit?usp=sharing

### Prompt
Make a basic CRUD (Create/Read/Update/Destroy) app for tracking different Pokemon, their levels, and types.
The home page will show the list of pokemon, and there should also be pages for
creating new and editing existing ones.  The user should also have the ability
to delete pokemon as well.  Clicking on a pokemon name in the list should show
the pokemon's information on the right hand side of the page.

Note: You will likely need to install `react-router` in order to manage
navigating between the different pages of the app. (you can find an example of
how to use it
[here](https://reactrouter.com/en/v6.3.0/getting-started/tutorial#connect-the-url))

### Database
At current, this app has no backend, so use the objects found in `src/data.ts`
as your "database": Read the list of pokemon from there.  Add them to that one,
and delete them from there.  Granted, every time you refresh the page, they will
be lost, but it will do for now.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.