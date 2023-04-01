import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <div className="app">
        <Button>This is a button</Button>
      </div>
    </ChakraProvider>
  )
}