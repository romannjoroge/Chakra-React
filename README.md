# Chakra UI Framework

## Introduction
Chakra is a React UI framework that makes app design easier for devs. It does this by making pre-styled components available to devs. The goal of this is to reduce the amount of work needed to make a good looking app.

## Set up
1. Create a react app
2. Install chakra from its site [Chakra UI](https://chakra-ui.com/getting-started)
3. Install additional packages such as chakra icons if needed

## Notes
If we want to give our application access to chakra we wrap the top level component *(in my case its the app component in app.js)* with the ChakraProvider component. We can then use custom components such as buttons from chakra by importing them and using them
```javascript
import { ChakraProvider } from "@chakra-ui/react";  // give acces to chakra
import { Button } from "@chakra-ui/react"; // import prebuilt components from chakra

export default function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Button>This is a button</Button>
      </div>
    </ChakraProvider>
  )
}
```
### Components
Components that are imported from chakra come with some default stylings in default. An example is the Text component which is used to style paragraphs in the app. 
The components not only come with default stylings, they also allow you to pass custom stylings as props, change the html tag it will render to with the as prop. Props that deal with CSS stylings are not only limited to CSS style properties since Chakra has defined some custom CSS style values for these components.  

In summary, these components reduce alot of the work done during styling
For information on what components Chakra provides and the props they take you can look at the [Documentation](https://chakra-ui.com/docs/components)

An example:
```javascript
<Text as='section' fontSize='4xl' color='red' noOfLines={2}>
    This is a paragraph that is styled using the Text's component props. The as prop changes what tag the component will be rendered to, 
    the color prop changes the color, fontSize changes fontsize etc. It's possible for these props to hold values that are not valid CSS 
    values.
</Text>
```