import { Button, Text } from "@chakra-ui/react";
import CustomLink from "./Components/CustomLink";

export default function Home() {
    return (
        <div className="app">
            <Text as='section' fontSize='4xl' color='red' noOfLines={2}>
                This is a paragraph that is styled using the Text's component props. The as prop changes what tag the component will be rendered to,
                the color prop changes the color, fontSize changes fontsize etc. It's possible for these props to hold values that are not valid CSS
                values.
            </Text>
            <Button>This is a button</Button>
            <hr></hr>
            <Text>
                Link to <CustomLink route='/about' ChakraComponent={Text}>about page</CustomLink>
            </Text>
        </div>
    );
}