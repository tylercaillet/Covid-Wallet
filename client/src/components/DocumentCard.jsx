const DocumentCard = ({image, name, typeDocument, onClick, id, first}) => {

    return (
        <div className='card' onClick={() => onClick(id)}>
            <div className='img-wrapper'>
                <img src={image} alt={name} />
                <p>{first}</p>


            </div>
            <div className='info-wrapper flex-col'>
                <h3>{name}</h3>
                <p>{typeDocument}</p>
            </div>
        </div>
    )
}

export default DocumentCard