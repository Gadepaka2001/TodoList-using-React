import TodoItem from "./TodoItem";

export default function Filter({CHECK,ALL,makeUnderLine,deleteItem,imDoubleClicked,appendToList}) {
    if (CHECK === 'ALL') {
        return (ALL.map((eachItem)=>{return <TodoItem key={eachItem.serialNumber} item = {eachItem} makeUnderLine = {makeUnderLine} deleteItem = {deleteItem} imDoubleClicked = {imDoubleClicked} appendToList = {appendToList}/>}));
      } else if (CHECK === 'Active') {
        let ActiveFiltered  = (ALL.filter(
          (item) => {
            return (item.status === 'active');
          }
         ))
         return (ActiveFiltered.map((eachItem)=>{return <TodoItem key={eachItem.serialNumber} item = {eachItem} makeUnderLine = {makeUnderLine} deleteItem = {deleteItem} imDoubleClicked = {imDoubleClicked} appendToList = {appendToList}/>}))
      } else {
        let CompletedFiltered  = (ALL.filter(
          (item) => {
            return (item.status === 'completed'); 
          }
         ))
         return (CompletedFiltered.map((eachItem)=>{return <TodoItem key={eachItem.serialNumber} item = {eachItem} makeUnderLine = {makeUnderLine} deleteItem = {deleteItem} imDoubleClicked = {imDoubleClicked} appendToList = {appendToList}/>}))
      }
}