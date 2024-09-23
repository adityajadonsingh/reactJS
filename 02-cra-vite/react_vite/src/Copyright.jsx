/* eslint-disable react/prop-types */

const Copyright = (props) => {
    console.log(props.details)
    return (
      <div style={{textAlign : "center"}}>
        <p>Coypright {props.nums}, Meta Inc., India</p>
        {/* Details : 
        Name : {props.details.userName}
        Age : {props.details.age} */}
      </div>
    )
}

export default Copyright
