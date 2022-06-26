import { useContext } from "react";
//context
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => useContext(AuthContext)
