import TodoItem from "./TodoItem";

export default function Filter({CHECK,ALL,makeUnderLine,Delete,imDoubleClicked,AppendToList}) {
    if (CHECK === 'ALL') {
        return (ALL.map((eachItem)=>{return <TodoItem key={eachItem.Sno} Item = {eachItem} makeUnderLine = {makeUnderLine} Delete = {Delete} imDoubleClicked = {imDoubleClicked} AppendToList = {AppendToList}/>}));
      } else if (CHECK === 'Active') {
        let ActiveFiltered  = (ALL.filter(
          (Item) => {
            return (Item.status === 'active');
          }
         ))
         return (ActiveFiltered.map((eachItem)=>{return <TodoItem key={eachItem.Sno} Item = {eachItem} makeUnderLine = {makeUnderLine} Delete = {Delete} imDoubleClicked = {imDoubleClicked} AppendToList = {AppendToList}/>}))
      } else {
        let CompletedFiltered  = (ALL.filter(
          (Item) => {
            return (Item.status === 'completed'); 
          }
         ))
         return (CompletedFiltered.map((eachItem)=>{return <TodoItem key={eachItem.Sno} Item = {eachItem} makeUnderLine = {makeUnderLine} Delete = {Delete} imDoubleClicked = {imDoubleClicked} AppendToList = {AppendToList}/>}))
      }
}