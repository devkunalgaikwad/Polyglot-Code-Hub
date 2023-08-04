// 'use client'

// import { MyUserContextProvider } from '@/hooks/useUser'
// import {UserProviderProps} from '../types/index'

// const UserProvider =({children}:UserProviderProps)=>{
//     return(
//         <MyUserContextProvider>
//             {children}
//         </MyUserContextProvider>
//     )
// }

// export default UserProvider;

"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({
  children
}) => {
  return ( 
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
   );
}
 
export default UserProvider;