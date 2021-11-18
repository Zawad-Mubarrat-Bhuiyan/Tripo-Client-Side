import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState({});
      const googleprovider = new GoogleAuthProvider();
      const auth = getAuth();
      const signInGoogle = () => {
            return signInWithPopup(auth, googleprovider)
                  .finally(() => { setLoading(false) });
      };
      const logout = () => {
            setLoading(true);
            signOut(auth)
                  .then(() => {
                        setUser({})
                  })
                  .finally(() => setLoading(false))
      };

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user);
                  }
                  else {
                        setUser({});
                  }
                  setLoading(false);
            });
            return () => unsubscribe;
      }, []);
      return {
            user,
            loading,
            // error,
            signInGoogle,
            logout
      }


}
export default useFirebase