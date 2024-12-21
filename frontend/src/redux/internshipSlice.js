import { createSlice } from "@reduxjs/toolkit";

const internshipSlice=createSlice({
    name: "internships",
    initialState: {
        allAdminInternships:[],
        loading:false,
        allInternships: [],
        singleInternship:null,
        searchInternshipByText:""
    },
    reducers: {
        setAllInternships: (state, action) => {
            state.allInternships = action.payload;
        },
        setSingleInternship: (state, action) => {
            state.singleInternship = action.payload;
        },
        setAllAdminInternships: (state, action) => {
            state.allAdminInternships = action.payload;
        },
        setSearchInternshipByText: (state, action) => {
            state.searchInternshipByText = action.payload;
        }
    }
});

export const { setAllInternships ,setSingleInternship , setAllAdminInternships,setSearchInternshipByText} = internshipSlice.actions;

export default internshipSlice.reducer;