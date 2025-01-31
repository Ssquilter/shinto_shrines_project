import shrines from '../shrines'

const ShrineList = () => {
  console.log('Shrines:', shrines)
  return (
    <div className="container">
      {shrines.map((shrine, index) => (
        <div className="card" key={index}>
          <img
            src={shrine.image}
            alt={shrine.shrineName}
            className="shrineImage"
          />
          <div className="text">
            <h2>{shrine.shrineName}</h2>
            <p>
              <strong>Location:</strong> {shrine.location.city},{' '}
              {shrine.location.prefecture}
            </p>
            <p>{shrine.summary}</p>
            <p>
              <strong>Year Built:</strong> {shrine.yearBuilt}
            </p>
            <p>
              <strong>Type of Shrine:</strong>
              <li>Category: {shrine.typeOfShrine.shrineCategory}</li>
              <li>Enshrined Kami: {shrine.typeOfShrine.enshrinedKami}</li>
            </p>
            <p>
              <strong>Architectural Features:</strong>

              {shrine.architecturalFeatures.toriiGate && <li>Torii Gate</li>}
              {shrine.architecturalFeatures.honden && <li>Honden</li>}
              {shrine.architecturalFeatures.haiden && <li>Haiden</li>}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShrineList
