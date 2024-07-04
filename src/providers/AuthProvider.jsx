import React from "react";
import { supabase } from "../lib/supabase";

const AuthContext = React.createContext({
  session: null,
  user: null,
});

export default function AuthProvider({ children }) {
  const [session, setSession] = React.useState(null);

  React.useEffect(() => {
    supabase.auth.getSession().then(async (session) => {
      setSession(session);
      if (!session) {
        supabase.auth.signInAnonymously();
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session, user: session?.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
