import './Card.css';
import CardData from '../../components/Card/CardData';
import Card1 from '../../public/sell.jpg';
import Card2 from '../../public/rent.jpg';
function Card(){
    return(
        <div className='card'>
            <CardData 
                image={Card1}
                heading ="Buy a Home"
                text = "Looking to make the dream of homeownership a reality? Look no further! At 'BA Real Estate' we are dedicated to helping you find your perfect abode."
            />

            <CardData 
                image={Card2}
                heading ="Rent a Home"
                text = "Searching for the perfect rental home? Look no further! At 'BA Real Estate,' we are committed to assisting you in finding your ideal living space."
            />
        </div>
    )
}
export default Card;