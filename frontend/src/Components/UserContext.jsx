// import { createContext, useState } from "react";

// export const UserDataContext = createContext();


// const UserContext=({children})=>{
//     const [user,setuser]=useState([
//         {
//             name:"priyanshu",
//             id:1,
//             bestseller:true,
//             cat:"men",
//         },
//         {
//             name:"subham",
//             id:2,
//             bestseller:false,
//             cat:"women",
//         },
//         {
//             name:"rohit",
//             id:3,
//             bestseller:true,
//             cat:"men",
//         },
//         {
//             name:"naman",
//             id:4,
//             bestseller:false,
//             cat:"kids",
//         }
//     ] );
 
//     return (
//         <UserDataContext.Provider value={{user,setuser}}>{children}</UserDataContext.Provider>
//     )
// }
// export default UserContext