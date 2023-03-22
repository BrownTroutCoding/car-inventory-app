import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        vin: 'VIN',
        make: 'Make',
        model: 'Model',
        year: 'Year',
        color: 'Color',
    },
    // linking pieces together
    // Setting the input to the state.name
    reducers: {
        chooseVin: (state, action) => { state.vin = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
    }
})

// taking code above, and exporting
export const reducer = rootSlice.reducer;
export const { chooseVin, chooseMake, chooseModel, chooseYear, chooseColor } = rootSlice.actions