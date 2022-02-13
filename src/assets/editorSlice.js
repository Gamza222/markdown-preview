import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: `# Hi, it is my code redactor
## It is h2 header
### It is h3 header, look what we can do here:
    
It is html code, \`<div></div>\`, check code editor to get the same result.
    
\`\`\`
// multi-line code: (if it is too long, overflow-x appears)
    
function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
\`\`\`
    
You can make text **bold**... !
Or _italic_.
Or... **_both!_**
This is ~~crossline whoaaa~~ , again, look at the editor to get this result.
    
You can pass a link [funny kitten](https://i1.7fon.org/thumb/z126329.jpg)
    
And if you want to get really crazy, even tables:
    
Table 1 | Table 2 | Table 3
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
    
- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.
    
    
1. And there are numbered lists too.
1. See?
1. So, last but not least - you can pass an image, **ladies and gentleman - ERLICH BACHMAN !**
    
![Erlich Bachman](https://pyxis.nymag.com/v1/imgs/c20/d74/60659c72bedf6bd871c00f6c2127014ad4-23-tj-miller-silicon-valley-4.rsquare.w700.jpg)
    `
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
      changeText: (state, action) => {
          console.log(action.payload)
          return {
              text: action.payload
          }
      }
  }
});

export const {changeText} = editorSlice.actions;

export default editorSlice.reducer;

export const newPrewiewerText = state => state.editor;

