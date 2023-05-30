import { addProductAction, getProductAction, navigateAction, ProductActions, AppState   } from "../types/store";

export const getProduct = async(): Promise<getProductAction> => {
    const products = await getProduct();
    return{
        action: ProductActions.GET,
        payload:,
    }
    
}


export const addProduct =async () => {
    const products = await addProduct();
    return{
        action: ProductActions.ADD,
        payload
    }
    
}
