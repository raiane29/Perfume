import fotoCarrinho from '../../../images/cart.svg'
import { H1, Div , Span , P , Button , Img , BtnP, H1Valor } from '../Styles/Caixa' 



const Caixa = () => {
    return(
         <Div>
            <P>PERFUME</P>
            <H1>Gabrielle Essence Eau De Parfum</H1>
            <P>A floral, solar and voluptuous interpretation 
            composed by Olievier Polge, Perfumer-Creator for tho House of CHANEL.</P>

            <Span>
                <H1Valor>$149.99</H1Valor>
                <P>$169.99</P>
            </Span>

            <Button>
                <Span>
                    <Img src={fotoCarrinho}/>
                    <BtnP>Add to Card</BtnP>
                </Span>
            </Button>
         </Div>
    )
}
export default Caixa