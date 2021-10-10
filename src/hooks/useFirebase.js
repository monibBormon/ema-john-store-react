import { useState } from "react"
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import initializeAuthentication from "../firebase/firebase.init"
import { useEffect } from "react"

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    // const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
        /* .then(result => {
            setUser(result.user)
        })
    setError('') */
    }

    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // observe whether user auth stated changed or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    })
    // multiple items hole return a {} bracket use korte hobe
    return {
        user,
        googleSignIn,
        logOut
    }
}

export default useFirebase;