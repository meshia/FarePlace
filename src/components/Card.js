import Timer from './Timer';

const Card = ({data}) => {
    const outboundId = data.outboundId ? data.outboundId : "";
    const inboundId = data.inboundId ? data.inboundId : "";
    const route = `${outboundId} - ${inboundId}`;

      return (
        <div className="Card">
            { data.endDate && <Timer endDate={data.endDate}></Timer> }
            { data.imageUrl &&
                <div className="image-wrapper">
                    <img src={ data.imageUrl } alt={ route }/>
                </div>
            }
            <h2>{ route }</h2>
            { data.currentMinPrice &&
                <span className="current-price-wrapper"> { `Now From ${data.currentMinPrice}${data.currencySymbol}` } </span>
            }
            { data.viewersCount &&
                <span className="viewers-count-wrapper"> { `Viewers: ${data.viewersCount}` } </span>
            }
        </div>
      );
}

export default Card;