import React,{useState} from 'react'
import './Table.css'

export default function Main1() {
  const [All, setAll] = useState([{'Sno':1,'input':false,'title':'Learning React Tutorial','status':'completed'},{'Sno':2,'input':false,'title':'Tic Tac Toe using React - Assignment','status':'completed'},{'Sno':3,'input':false,'title':'Todos List using React - Assignment','status':'active'},{'Sno':4,'input':false,'title':'need to learn CSS advanced','status':'active'},{'Sno':5,'input':false,'title':'Need to do some projects','status':'active'}]);
  const [Check, setCheck] = useState('All');
  const [Color, setColor] = useState(['black','aqua','aqua'])

  function MakeUnderLine(e)
  {
    let ID = e.target.value;
    let Allarr = [...All];
    for(let i=0;i<Allarr.length;i++)
      {
        if (JSON.stringify(Allarr[i].Sno) === ID)
          {
            if (e.target.checked === true)
            {
              Allarr[i].status = 'completed';
            }
            else
            {
              Allarr[i].status = 'active';
              e.target.checked = false;
            }
          }
      }
    setAll(Allarr);
  }

  function Delete(e)
  {
    let arr = [...All]
    for(let i=0;i<arr.length;i++)
    {
      if (arr[i].Sno === e)
      {
        arr.splice(i,1);
      }
    }
    setAll(arr);
  }

  function ImDoubleClicked(e)
  {
    console.log(e.target);
    let ID = e.target.id;
    console.log(ID);
    let arr = [...All];
    for(let i=0;i<arr.length;i++)
    {
      console.log('Sno = ',arr[i].Sno);
      if (JSON.stringify(arr[i].Sno) === ID)
      {
        console.log('Im in');
        arr[i].input = true;
      }
    }
    console.log(arr);
    setAll(arr);
  }

  function GET(e){
      if (e.status === 'completed')
      {
        
        return <div key={e.Sno} className='container'><input type="checkbox" value={e.Sno} checked={true} onChange={MakeUnderLine}/><h3 id={e.Sno} style={{'textDecoration':'line-through'}}>{e.title}<button className='delete' onClick={()=>{Delete(e.Sno)}}>delete</button></h3></div>
      }
      else
      {
        if (e.input === false)
        {
          return <div key={e.Sno} className='container'><input type="checkbox" value={e.Sno} onChange={MakeUnderLine}/><h3 id={e.Sno} style = {{'cursor':'pointer'}} onDoubleClick={ImDoubleClicked}>{e.title}<button className='delete' onClick={()=>{Delete(e.Sno)}}>delete</button></h3></div>
        }
        else
        {
         return <div key={e.Sno} className='container'><input type="text" id = 'update-input' /><button className='edit' onClick={()=>{AppendToList1(e.Sno)}}>+</button></div>
        }
      }
  }

  function AppendToList1(S)
  {
    let I = document.getElementById('update-input');
    let arr = [...All]
    let temp = {'Sno':0,'title':'','status':'active','input':false}
    temp.Sno = S; 
    temp.title = I.value;
    let N = 50;
    if (I.value.length <= N)
    {
      arr[S-1]=temp;
      setAll(arr);
    }
    else
    {
      alert('Exceding '+JSON.stringify(N)+' Letters')
    }
  }


  function AppendToList()
  {
    let I = document.getElementById('text-input');
    let arr = [...All]
    let temp = {'Sno':0,'title':'','status':'active','input':false}
    temp.Sno = arr.length+1;
    temp.title = I.value;
    let N = 50;
    if (I.value.length <= N)
    {
      arr.push(temp)
      setAll(arr)
    }
    else
    {
      alert('Exceding '+JSON.stringify(N)+' Letters')
    }
  }


  function ChangeCheckToAll()
  {
    let arr = ['black','aqua','aqua'];
    setColor(arr);
    setCheck('All');
  }

  function ChangeCheckToActive()
  {
    let arr = ['aqua','black','aqua'];
    setColor(arr);
    setCheck('Active');
  }

  function ChangeCheckToCompleted()
  {
    let arr = ['aqua','aqua','black'];
    setColor(arr);
    setCheck('Completed');
  }


  
  let V;
  if (Check === 'All')
  {
    V = (All.map((e)=>{return GET(e)}));
  }
  else if (Check === 'Active')
  {
     let ActiveFiltered  = (All.filter(
      (e)=>{
        return (e.status === 'active'); 
      }
     ))
     V = (ActiveFiltered.map((e)=>{return GET(e)}))
  }
  else
  {
    let CompletedFiltered  = (All.filter(
      (e)=>{
        return (e.status === 'completed'); 
      }
     ))
     V = (CompletedFiltered.map((e)=>{return GET(e)}))
  }


  return (
  <div className="main">
    <div className='container'><h1>ToDo lists of Saipraneeth</h1></div>
    <div className='container'><input className='Input' type="text" id='text-input'/><span className='btn' onClick={()=>{AppendToList()}}>+</span></div>
      <div>
        {
          V
        }
      </div>
      <div className='footer'><span id='all' style={{'backgroundColor':Color[0]}} onClick={()=>{ChangeCheckToAll()}}>All</span><span id='active' style={{'backgroundColor':Color[1]}} onClick={()=>{ChangeCheckToActive()}}>Active</span><span id='completed' style={{'backgroundColor':Color[2]}} onClick={()=>{ChangeCheckToCompleted()}}>Completed</span></div>
  </div>
    )
}

