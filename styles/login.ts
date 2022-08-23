import styled from 'styled-components'
import {Button} from './components/Button';

export const LoginButton = styled(Button)`
    background: ${(props) => props.primary ? 'green' : 'blue'}
`