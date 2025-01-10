import { configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import internshipSlice from "./internshipSlice";
import CompanySlice from "./companySlice";
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
    internship: internshipSlice,
    company:CompanySlice
});

const persistConfig = {
    key: 'root',
    storage,
    version:1,

}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store=configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
 
});

export const persistor = persistStore(store);


export default store;