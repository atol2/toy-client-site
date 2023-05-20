import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
const useFirebaseUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth);
    });
  }, []);
  return { user, setUser };
};

export default useFirebaseUser;