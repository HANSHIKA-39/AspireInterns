import { configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import internshipSlice from "./internshipSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
    
} from 'redux-persist'

import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    auth: authSlice,
    internships: internshipSlice,
    company:companySlice
});

const persistConfig = {
    key: 'root',
    storage,
    version:1,

}
const store=configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
 
});

export default store;