import { ChakraProvider } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Text as='section' fontSize='4xl' color='red' noOfLines={2}>
          This is a paragraph that is styled using the Text's component props. The as prop changes what tag the component will be rendered to, 
          the color prop changes the color, fontSize changes fontsize etc. It's possible for these props to hold values that are not valid CSS 
          values.
        </Text>
        <Button>This is a button</Button>
      </div>
    </ChakraProvider>
  )
}