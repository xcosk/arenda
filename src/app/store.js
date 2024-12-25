import productSlice from "../routes/product/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export default  configureStore ({
    reducer: {
        product: productSlice
    }
})