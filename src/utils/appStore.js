import {configureStore} from "@reduxjs/toolkit";
import fieldSlice from "./fieldSlice";
const appStore = configureStore({
    reducer:{
        field:fieldSlice
    },
})

export default appStore;