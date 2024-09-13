// ************** Old Way Of Creating React Element ************** //

// const rootDiv = document.querySelector("#root");
// const root = ReactDOM.createRoot(rootDiv);
// const h1 = React.createElement("h1", { className: "heading" }, "ReactJS");
// root.render(h1);



// ************** New Way Of Creating React Element ************** //

const rootDiv = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDiv);  // React DOM | Virtual DOM

const Heading = () => {    // React Functional Component & It's name should be always start with capital letter
    return (
        // class is a reserved keyword in js so we have to give class of an element by className
        // In react we cannot add empty tag like <br>, <img>, <hr>. So, we have to close like this <img/>
        // Below is the HTML in form of JSX(JavaScript and XML) and browser does not understand the JSX so babel is used to converting the code for browser also in vanilla js a function cannot return HTML thats why we have use babel which convert reactJS code to vanilla js for the browser
        <div>
            <h1 className="blue">React Heading</h1>  
            <img src="image source"/>
        </div>
        
    )
};

const Card = () => {

    // JSX allows us to write JS and HTML in one Functional Component

    let name = "Aditya Jadon";
    let designation = "Web Developer";
    let address = "F-100, Palam Vihar, Gurgoan";
    
    return (
        <div className="card">
            <div className="name">Name: {name}</div>
            <div className="designation ">Designation : {designation}</div>
            <div className="name">Address : {address}</div>
        </div>
    )
}


root.render(
    // <Heading />,
    <Card/>
)