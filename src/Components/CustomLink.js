import { Link } from 'react-router-dom'
import { Link as Clink} from '@chakra-ui/react'

export default function CustomLink({ route, ChakraComponent, children, ...props }) {
    return (
        <Link to={route}>
            <Clink>
                <ChakraComponent {...props}>{children}</ChakraComponent>    
            </Clink>
        </Link>
    );
}