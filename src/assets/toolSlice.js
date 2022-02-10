import { createSlice } from '@reduxjs/toolkit'

const initialState = {
maximisedEditor: false,
maximisedPrewiwer: false
}

const toolSlice = createSlice({
  name: 'maximising',
  initialState,
  reducers: {
      maximiseValue: (state, action) => {   
          console.log(action.payload);
          switch (action.payload) {
            case "editor-container": 
            return {
                maximisedEditor: !state.maximisedEditor,
                maximisedPrewiwer: false
            }
            case "prewiew-container":
                return {
                    maximisedEditor: false,
                    maximisedPrewiwer: !state.maximisedPrewiwer
                }
            default: 
                return state;
          }
           
          
       
      }
  }
});

export const { maximiseValue } = toolSlice.actions;

export default toolSlice.reducer;

export const changeMaximised = state => state.maximising;