

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

# Export / Import

    -> Export => We have created different functional component in different file, if we have to use it in seperate file then we have to first export that functional component [export default <function's name>]

    -> Import => We will use import to get the functional component in which we want that component [import <functional's name> from "file_path"]

    -> Types of export
        1. Default Export - When we have only one component in a file then we will use default (Preferred Way)
        2. Named Export - When we have multiple component in a file then we will use named export

# Types of CSS

    1. Local CSS / Modular CSS -> Specific to component by changing the file name to <file_name>.module.css and then importing it in desired component [import <styles> from "file_path"] and in className={<styles>.className}

    Example : 

    import style from "./content.module.css"

    const FunctionalComp = () => {

        return (
            <h1 class={styles.large-txt}>Heading</h1>
        )

    }

    2. Global CSS -> Common CSS for the project 

    But webpack will bundle all the css and put in a style tag on index.html so we have to use Modular CSS which will get convert to some unique name by the react  

    Example : 

    const FunctionalComp = () => {

        return (
            <h1 class={"large-txt"}>Heading</h1>
        )

    }

    3. Inline CSS -> This CSS is given inline of an element

    Example : 

    <p style={{border: "1px solid red", color: "white"}}>This is a para</p>

# Props / Destructure / ?.

    ->  It is the dynamic data (arguments) given to a functional component(parameters)
        OR
        In React, props (short for "properties") are used to pass data from one component to another. Props enable parent components to send data and functionality to their child  components, allowing for dynamic and reusable components.

        Example : 

        const Copyright (props) => {
            return (
                <p>Copyright {props.year}, {props.companyName}, India</p>
            )
        }

        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  

        const App = () => {
            return (
                <div>
                    <Copyright year={"2023"} companyName={"XYZ"}/>
                </div>
            );
        };

        In react arguments are given to functional component like <Copyright year={"2023"} companyName={"XYZ"}/> and which is treated as object keys & value inside the functional component which is accessable like normal object "const Copyright (props) => " with {} like this {props.year}

    ->  Destructuring props    

        There is also an other method to handle the props in function component with is using destructure

        Destructuring props is a convenient way to extract specific properties from the props object directly, making the code more concise and readable. Instead of accessing props via props.propertyName, destructuring allows you to grab the properties you need directly from the function arguments or this.props

        Example : 

        const Copyright ({year, companyName}) => {
            return (
                <p>Copyright {year}, {companyName}, India</p>
            )
        }

        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

        const App = () => {
            return (
                <div>
                    <Copyright year={"2023"} companyName={"XYZ"}/>
                </div>
            );
        };

        * In nested object

        const UserProfile = ({ user: { name, age, location: { city, country } } }) => {}


    ->  Arrays props

        Example : 

        <Copyright year={[1,2,3,4,5,6]} nums={[1,2,34,5,6]} details={{userName : "Aditya", age : "23"} }/>

        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

        const Card (props) => {
            return (
                <p>Coypright {props.nums}, Meta Inc., India</p>
            )
        }

        In this if we show the props array nums in the component then it will show as a string on screen

        for() and forEach loop does not work inside jsx but we can use map, filter, etc but its necessary to return it 

    -> Object Props

        Example : 

        <Copyright year={[1,2,3,4,5,6]} nums={[1,2,34,5,6]} details={{userName : "Aditya", age : "23"} }/>

        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

        const Card (props) => {
            return (
                <p>Details</p>
                <p>Name : {props.details?.userName}</p>
                <p>Age : {props.details?.age}</p>
            )
        }   

        In object we have add (?) operator because in react at first when the screen render it shows the props.details undefined but after then the data comes. So, for avoiding the error when have to use (?) operator

        ? operator => it work as if the left side of the ? operator is undefined then the right side will not execute 

