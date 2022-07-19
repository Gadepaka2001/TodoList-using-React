import "./TodoLists.css";

export default function TodoItem({item,makeUnderLine,deleteItem,imDoubleClicked,appendToList}) {
    if (item.status === 'completed') {
      return <div key={item.serialNumber} className='container'><input type="checkbox" value={item.serialNumber} checked={true} onChange={makeUnderLine}/><h3 id={item.serialNumber} style={{'textDecoration':'line-through'}}>{item.title}<button className='delete' onClick={()=>{deleteItem(item.serialNumber)}}>delete</button></h3></div>
    } else {
      if (item.input === false) {
        return <div key={item.serialNumber} className='container'><input type="checkbox" value={item.serialNumber} onChange={makeUnderLine}/><h3 id={item.serialNumber} style = {{'cursor':'pointer'}} onDoubleClick={imDoubleClicked}>{item.title}<button className='delete' onClick={()=>{deleteItem(item.serialNumber)}}>delete</button></h3></div>
      }
      else {
        return <div key={item.serialNumber} className='container'><input type="text" id = 'update-input' /><button className='edit' onClick={()=>{appendToList('update-input',item.serialNumber)}}>+</button></div>
      }
    }
}