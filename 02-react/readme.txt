

# Requirement to run ReactJS 

    -> Babel - To convert JSX code to browser understanding JS code
    -> Live Server
    -> Webpack (Bundler), Minifier - This will make a single file of a the code for different component and load it in html page
    -> React & ReactDOM
    -> HTML file with root div
    -> React Configuration 
        const rootDiv = document.querySelector("#root");
        const root = ReactDOM.createRoot(rootDiv);

# Boiler Plates (To easier the above thing, that's why we use boiler plate => which is ready made configured app for any Framework or library)

    -> There are two types of boiler plate
        1. Create React app (CRA)
        2. Vite

# Startup (CRA)

    -> Node & npm required
    -> Install create-react-app => npm i -g create-react-app (Try to run on git bash not on powershell)
    -> Now create a boiler plate for the project => create-react-app <project_name> (The project name's should in lowercase only without any spaces)
    -> npm start (to run in cra)

# Startup (Vite)

    -> npx create vite@latest 
    -> npm run dev (to run in vite)

# Difference b/w Vite & CRA

    -> CRA is older and Vite is newer 
    -> Vite is faster then CRA / more optimised    

# Overview of project file-structure

    -> package.json => It contain the compelete information of our project(like versions of project, dependencies[it's like adding script tages to add libraries in html] of the project, etc) and it is the first thing that is loaded when project get started  

    -> package.lock.json => This file is for which dependencies is for which dependencies like runing babel we need some other dependencies.

    -> node_modules => All the things required to run the project(like babel, reactDOM, etc / dependencies with version numbers) are kept here 

    -> .gitignore => This is used by git only as it will ignore the file which should pushed to github

    -> public => This contain our html file and other stuff (we will not change anything in this folder)

    -> src => This is where we will write your code (logic, jsx, css, etc.)
        - index.js => The first file which will be load in which we will import the app.js in which our code is written
            const App = () => {} // App.js (export app) [export default <React Functional component's name>]
            root.render(<App />) // Import App.js in index.js [import <React Functional component's name> from "<file_name>"]

# Difference b/w npm & npx => In npm the packages and all the required things will get downloaded and install but in npx the packages will not install but we can use it

  ^__^
  (oo)\_______
  (__)\       )\/\
      ||----w |
      ||     ||