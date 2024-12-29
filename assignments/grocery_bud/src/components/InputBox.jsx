import { useState } from "react"

const InputBox = (props) => {



  return (
    <>
      <div className="w-3/5 border bg-white shadow py-8 px-5 rounded">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center text-[#32b532]">Grocery Bud</h1>
        </div>
        <hr className="my-5" />
        <form onSubmit={props.submit}>
        <div className="w-full flex">
          <input type="text" placeholder="Write Item..." className="w-3/5 border py-1 px-3 focus:outline-none" required value={props.itemName} onChange={e => props.itemFunc(e.target.value)} />
          <button className="w-2/5 bg-[#7bc1ff] hover:bg-[#5895cb] text-white font-bold transition">Add Item</button>
        </div>
        </form>
      </div>
    </>
  )
}

export default InputBox
