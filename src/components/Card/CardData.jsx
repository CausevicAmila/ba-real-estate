import './Card.css';
function CardData(props){
    return(
        <div className='t-card bg-lightgray'>
            <div className='t-image object-cover mt-6 ml-6 mr-6'> 
                <img src={props.image} alt='image'/>
            </div>
            <p className='text-2xl leading-8 font-inter text-primary font-semibold uppercase mt-6'>{props.heading}</p>
            <p className='text-xl leading-7 font-inter text-darkgray font-normal mt-6'>{props.text}</p>
        </div>
    )
}
export default CardData;