import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
const useFirebaseUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth);
      setLoading(false);
    });
  }, []);
  return { user, setUser, loading };
};

export default useFirebaseUser;