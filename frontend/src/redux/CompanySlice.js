import { createSlice } from "@reduxjs/toolkit";

const companySlice=createSlice({
    name: "companies",
    initialState: {
        singleCompany: null,
    },
    reducers: {
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },
        setCompanies:(state, action) => {
            state.companies = action.payload;
        },
        setSearchCompanyByText:(state, action) => {
            state.companies = action.payload;
        }
    }

    // Add other reducers as needed...
})

export const { setSingleCompany,setCompanies,setSearchCompanyByText } = companySlice.actions;

export default companySlice.reducer;