import RoutesApp from './routes';
import { db, auth } from "./services/firebase/firebase";
import { 
  doc, 
  setDoc,
  collection,
  addDoc,
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  onSnapshot,
} from "firebase/firestore"
import firebase from "firebase/compat/app";

function App() {
  return (
    <>
        <RoutesApp></RoutesApp>
    </>
  )
}

export default App
