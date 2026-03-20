// import React, { useContext, useEffect, useState } from 'react'
// import { UserDataContext } from '../Components/UserContext';
//
// function Practice() {
//    const {user,setuser}=useContext(UserDataContext);
//     const [latestuser,setlatestuser] = useState([]);
//     const [bestSeller,setbestSeller] = useState([]);
//     const [filterP,setfilterP] = useState([]);
//     const [Cat,setCat] = useState([]);
//     // console.log(user);
//     useEffect(()=>{
//         setlatestuser(user.slice(0,4));
//     },[user])
//     useEffect(()=>{
//        const filterel= user.filter((item)=>item.bestseller);
//        setbestSeller(filterel.slice(0,4));
//
//     },[user])
//     // console.log(bestSeller);
//     const toggle=(e)=>{
//        if(Cat.includes(e.target.value)){
//         setCat((prev) => prev.filter((item) => item !== e.target.value));
//        }else{
//         setCat(item=>[...item,e.target.value]);
//        }
//     }
//
//     const applyfun=()=>{
//          let Copy=user.slice(0,4);
//          if(Cat.length >0){
//              Copy = Copy.filter((item) => Cat.includes(item.cat));
//          }
//         setfilterP(Copy);
//     }
//     useEffect(()=>{
//         applyfun();
//     },[Cat,user])
//
//     console.log(filterP);
//   return (
//     <div>
//   {latestuser.map((item)=>{
//     return <h1 key={item.id}>{item.name}</h1>
// })}
// <div>
//     <p className='flex gap-2'>
//         <input type="checkbox" value="men" onChange={toggle}/>
//         men
//     </p>
//     <p className='flex gap-2'>
//         <input type="checkbox" value="women" onChange={toggle}/>
//         women
//     </p>
//     <p className='flex gap-2'>
//         <input type="checkbox" value="kids" onChange={toggle}/>
//         kids
//     </p>
// </div>
//     </div>
//   )
// }
//
// export default Practice
