import firebaseConfig from "../firebaseConfig";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { addDoc, getDoc, doc, collection, Firestore}  from "firebase/storage";
import { Products } from "../types/Products";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addProduct =async () => {
    try {
        const Products = await addDoc(db, 'products');
    } catch (error) {
        console.error(error);
        
    }
}

const getProduct =async () => {
    const firebaseData = await getDoc (collection(db, 'products'));
    const productsArray: Array<Products> = [];

    firebaseData.forEach((doc: any)=>{
        const data = await getDoc(Array<Products>)

    })
        
}
export default{
    addProduct,
    getProduct
}