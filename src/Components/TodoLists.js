import React,{useState} from 'react'
import './TodoLists.css'
import Filters from './Filters';

export default function TodoLists() {
  //In 'ALL' State we store todo lists.
  const [ALL, setALL] = useState([{'Sno':1,'input':false,'title':'Learning React Tutorial','status':'completed'},{'Sno':2,'input':false,'title':'Tic Tac Toe using React - Assignment','status':'completed'},{'Sno':3,'input':false,'title':'Todos List using React - Assignment','status':'active'},{'Sno':4,'input':false,'title':'Need to learn CSS advanced','status':'active'},{'Sno':5,'input':false,'title':'Need to do some projects','status':'active'}]);
  //In 'CHECK' state is used for filtering. By default it is in 'ALL'.
  const [CHECK, setCHECK] = useState('ALL');
  //In 'COLOR' we store background colors of 'ALL','Active' & 'Completed' in a list.
  const [COLOR, setCOLOR] = useState(['black','blue','blue'])

  function makeUnderLine(Item) {
    let ID = Item.target.value;
    let Allarr = [...ALL];
    for(let i=0;i<Allarr.length;i++) {
        if (JSON.stringify(Allarr[i].Sno) === ID) {
            if (Item.target.checked === true) {
              Allarr[i].status = 'completed';
            } else {
              Allarr[i].status = 'active';
              Item.target.checked = false;
            }
          }
      }
    setALL(Allarr);
  }

  function Delete(Item) {
    let arr = [...ALL]
    for(let i=0;i<arr.length;i++) {
      if (arr[i].Sno === Item) {
        arr.splice(i,1);
      }
    }
    setALL(arr);
  }

  function imDoubleClicked(Item) {
    let ID = Item.target.id;
    let arr = [...ALL];
    for(let i=0;i<arr.length;i++) {
      if (JSON.stringify(arr[i].Sno) === ID) {
        arr[i].input = true;
      }
    }
    setALL(arr);
  }

  function AppendToList(S,Num) {
    let I = document.getElementById(S);
    let arr = [...ALL]
    let temp = {
      'Sno':0,
      'title':'',
      'status':'active',
      'input':false
    }
    if (S === 'main-input') {
      temp.Sno = arr.length+1;
    } else {
      temp.Sno = Num;
    }
    temp.title = I.value;
    let N = 50;
    if (I.value.length <= N) {
      if (S === 'main-input') {
        arr.push(temp)
      } else {
        arr[Num-1] = temp;
      }
      setALL(arr)
    } else {
      alert('Exceding '+JSON.stringify(N)+' Letters')
    }
  }

  function ChangeCheckToAll() {
    let arr = ['black','blue','blue'];
    setCOLOR(arr);
    setCHECK('ALL');
  }

  function ChangeCheckToActive() {
    let arr = ['blue','black','blue'];
    setCOLOR(arr);
    setCHECK('Active');
  }

  function ChangeCheckToCompleted() {
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
      <span className='btn' onClick={()=>{AppendToList('main-input',0)}}>
        +
      </span>
    </div>
    <div>
      <Filters CHECK = {CHECK} ALL = {ALL} makeUnderLine = {makeUnderLine} Delete = {Delete} imDoubleClicked = {imDoubleClicked} AppendToList = {AppendToList}/>;
    </div>
    <div className='filterIcons'>
      <span id='all' style={{'backgroundColor':COLOR[0]}} onClick={()=>{ChangeCheckToAll()}}>
        All
      </span>
      <span id='active' style={{'backgroundColor':COLOR[1]}} onClick={()=>{ChangeCheckToActive()}}>
        Active
      </span>
      <span id='completed' style={{'backgroundColor':COLOR[2]}} onClick={()=>{ChangeCheckToCompleted()}}>
        Completed
      </span>
    </div>
  </div>
    )
}

