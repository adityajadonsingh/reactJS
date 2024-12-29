import { useState } from "react";

const ListItem = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = (index, e) =>{
        setIsChecked(e.target.checked);
        const updatedList = [...props.listItem];
        updatedList[index].isChecked = e.target.checked;
        props.setList(updatedList);
    }
    const handleDelete = (index) => {
        const getList = [...props.listItem];
        const updatedList = getList.filter((_, idx) => idx !== index);
        props.setList(updatedList);
        localStorage.setItem("list", JSON.stringify(updatedList))
    }

  return (
    <>
      { props.listItem.length ? 
        <div className="w-3/5 border bg-white shadow py-8 px-5 rounded">
        <ul className="flex w-full flex-col gap-y-3">
          {
          props.listItem.map((item, idx) => {
            return <li key={idx+"listItem"} className="flex">
            <div className="w-1/12 flex justify-center">
              <input type="checkbox" checked={isChecked} onChange={(e) => handleChecked(idx, e)} />
            </div>
            <div className="w-9/12">
            {
                item.isChecked
                ? <span className="block line-through">{item.item}</span> 
                : <span className="block">{item.item}</span>
            }
            </div>
            <div className="w-2/12">
              <button className="bg-red-600 hover:bg-red-700 transition text-white w-full rounded" onClick={()=> handleDelete(idx)}>
                Delete
              </button>
            </div>
          </li>;
          })
          }
        </ul>
        </div>
        :
        <></>
      }
    </>
  );
};

export default ListItem;
