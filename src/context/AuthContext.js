import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signOut(){
        return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
      })
      return () => {
          unsubscribe();
      }
    }, [])
    

    const totalValues = { signUp, signIn, signOut, user,}

    return (
        <AuthContext.Provider value={totalValues}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}