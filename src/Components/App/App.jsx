import foto from '../../../images/imgDesktop.jpg'
import Caixa from '../Caixa/Caixa'
import { Container , Img} from '../Styles/App'

const App = () => {
    return(
        <Container>
            <Img src={foto}/>

            <Caixa/>
        </Container>
    )
}
export default App