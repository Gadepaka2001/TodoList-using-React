import React,{useState} from 'react'
import './TodoLists.css'
import Filters from './Filters';

export default function TodoLists() {
  //In 'ALL' State we store todo lists.
  const [ALL, setALL] = useState([{'serialNumber':1,'input':false,'title':'Learning React Tutorial','status':'completed'},{'serialNumber':2,'input':false,'title':'Tic Tac Toe using React - Assignment','status':'completed'},{'serialNumber':3,'input':false,'title':'Todos List using React - Assignment','status':'active'},{'serialNumber':4,'input':false,'title':'Need to learn CSS advanced','status':'active'},{'serialNumber':5,'input':false,'title':'Need to do some projects','status':'active'}]);
  //In 'CHECK' state is used for filtering. By default it is in 'ALL'.
  const [CHECK, setCHECK] = useState('ALL');
  //In 'COLOR' we store background colors of 'ALL','Active' & 'Completed' in a list.
  const [COLOR, setCOLOR] = useState(['black','blue','blue'])

  function makeUnderLine(item) {
    let value = item.target.value;
    let arrAll = [...ALL];
    for(let i=0;i<arrAll.length;i++) {
        if (JSON.stringify(arrAll[i].serialNumber) === value) {
            if (item.target.checked === true) {
              arrAll[i].status = 'completed';
            } else {
              arrAll[i].status = 'active';
              item.target.checked = false;
            }
          }
      }
    setALL(arrAll);
  }

  function deleteItem(item) {
    let arr = [...ALL]
    for(let i=0;i<arr.length;i++) {
      if (arr[i].serialNumber === item) {
        arr.splice(i,1);
      }
    }
    setALL(arr);
  }

  function imDoubleClicked(item) {
    let id = item.target.id;
    let arr = [...ALL];
    for(let i=0;i<arr.length;i++) {
      if (JSON.stringify(arr[i].serialNumber) === id) {
        arr[i].input = true;
      }
    }
    setALL(arr);
  }

  function appendToList(inputId,serialNum) {
    let inputTag = document.getElementById(inputId);
    let arr = [...ALL]
    let temp = {
      'serialNumber':0,
      'title':'',
      'status':'active',
      'input':false
    }
    if (inputId === 'main-input') {
      temp.serialNumber = arr.length+1;
    } else {
      temp.serialNumber = serialNum;
    }
    temp.title = inputTag.value;
    let n = 50; //restricting to take upto 50 letters only.
    if (inputTag.value.length <= n) {
      if (inputId === 'main-input') {
        arr.push(temp)
      } else {
        arr[serialNum-1] = temp;
      }
      setALL(arr)
    } else {
      alert('Exceding '+JSON.stringify(n)+' Letters')
    }
  }

  function changeCheckToAll() {
    let arr = ['black','blue','blue'];
    setCOLOR(arr);
    setCHECK('ALL');
  }

  function changeCheckToActive() {
    let arr = ['blue','black','blue'];
    setCOLOR(arr);
    setCHECK('Active');
  }

  function changeCheckToCompleted() {
    let arr = ['blue','blue','black'];
    setCOLOR(arr);
    setCHECK('Completed');
  }


  

  return (
  <div className="main">
    <div className='container'>
      <h1>
        ToDo lists of Saipraneeth
      </h1>
    </div>
    <div className='container'>
      <input className='Input' type="text" id='main-input'/>
      <span className='btn' onClick={()=>{appendToList('main-input',0)}}>
        +
      </span>
    </div>
    <div>
      <Filters CHECK = {CHECK} ALL = {ALL} makeUnderLine = {makeUnderLine} deleteItem = {deleteItem} imDoubleClicked = {imDoubleClicked} appendToList = {appendToList}/>;
    </div>
    <div className='filterIcons'>
      <span id='all' style={{'backgroundColor':COLOR[0]}} onClick={()=>{changeCheckToAll()}}>
        All
      </span>
      <span id='active' style={{'backgroundColor':COLOR[1]}} onClick={()=>{changeCheckToActive()}}>
        Active
      </span>
      <span id='completed' style={{'backgroundColor':COLOR[2]}} onClick={()=>{changeCheckToCompleted()}}>
        Completed
      </span>
    </div>
  </div>
    )
}

