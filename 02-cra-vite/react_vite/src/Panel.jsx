


const Panel = ({id, expandedId, handleButton}) => {


  return (
    <>
      <div className="panel">
        
        
        {
            id == expandedId ? (<><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat ea in iusto fugit a blanditiis ab recusandae id aliquid sit facilis similique, vitae eveniet provident distinctio debitis modi omnis.</span><button onClick={() => {
                handleButton(id)
            }}>-</button></>) : (<><span>lorem ...</span> <button onClick={() => {
                handleButton(id)
            }}>+</button></>) 
        }
        
      </div>
    </>
  )
}

export default Panel
