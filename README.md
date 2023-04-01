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