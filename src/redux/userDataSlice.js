import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"

const API_KEY = 'YWFjNDY3OGEzZTI2NDFhMGJkZmE5MjYxMzhlOTM3MmM6Njk5OWE4YjEtYzllOS00NGQyLTlkZTAtYjlkZGY1NDk0MzU3';

export const fetchFindSuggestions = createAsyncThunk(
    'users/fetchFindSuggestions',
    async function (adress){
        const response = await fetch(`https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${adress}&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
                const found = data.locations.find(location => location.formattedAddress.indexOf(adress));
                if(found){
                  let location = found.formattedAddress + ' ' + found.address.countryName;
                    return [location];
                } 
              }) 

         return response;
    }
)


const usersDataSlice = createSlice({
    name: "users",
    initialState:{
        usersDataList: [],
        location: [],
        status: null,
    },
    reducers:{
        addUserToDataList: (state,action) =>{
            state.usersDataList.push(action.payload)
        }
    },
    extraReducers:{
       [fetchFindSuggestions.pending]: (state,action) => {
        state.status = 'loading';
       }, 
       [fetchFindSuggestions.fulfilled]: (state,action) => {
        state.location = action.payload;
        state.status = 'succeess';
       }, 
       [fetchFindSuggestions.rejected]: (state,action) => {
        state.status = 'failed';
       }, 
    }
})


export const {addUserToDataList} = usersDataSlice.actions;
export default usersDataSlice.reducer;