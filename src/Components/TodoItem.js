import "./TodoLists.css";

export default function TodoItem({Item,makeUnderLine,Delete,imDoubleClicked,AppendToList}) {
    if (Item.status === 'completed') {
      return <div key={Item.Sno} className='container'><input type="checkbox" value={Item.Sno} checked={true} onChange={makeUnderLine}/><h3 id={Item.Sno} style={{'textDecoration':'line-through'}}>{Item.title}<button className='delete' onClick={()=>{Delete(Item.Sno)}}>delete</button></h3></div>
    } else {
      if (Item.input === false) {
        return <div key={Item.Sno} className='container'><input type="checkbox" value={Item.Sno} onChange={makeUnderLine}/><h3 id={Item.Sno} style = {{'cursor':'pointer'}} onDoubleClick={imDoubleClicked}>{Item.title}<button className='delete' onClick={()=>{Delete(Item.Sno)}}>delete</button></h3></div>
      }
      else {
        return <div key={Item.Sno} className='container'><input type="text" id = 'update-input' /><button className='edit' onClick={()=>{AppendToList('update-input',Item.Sno)}}>+</button></div>
      }
    }
}