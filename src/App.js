import { ChakraProvider } from "@chakra-ui/react";
import Content from "./content";

export default function App() {
  return (
    <ChakraProvider>
      <Content />
    </ChakraProvider>
  )
}