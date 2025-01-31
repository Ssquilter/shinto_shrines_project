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
            <p>{shrine.summary}</p>

            <p>
              <strong>Location:</strong> {shrine.location.city},{' '}
              {shrine.location.prefecture}
            </p>

            <p>
              <strong>Year Built:</strong> {shrine.yearBuilt}
            </p>

            <p>
              <strong>Type of Shrine:</strong>
            </p>
            <ul>
              <li>Category: {shrine.typeOfShrine.shrineCategory}</li>
              <li>Enshrined Kami: {shrine.typeOfShrine.enshrinedKami}</li>
            </ul>

            <p>
              <strong>Architectural Features:</strong>
            </p>
            <ul>
              {shrine.architecturalFeatures.toriiGate && <li>Torii Gate</li>}
              {shrine.architecturalFeatures.honden && <li>Honden</li>}
              {shrine.architecturalFeatures.haiden && <li>Haiden</li>}
            </ul>

            <p>
              <strong>Religion & Culture:</strong>
            </p>
            <ul>
              <li>
                Annual Festivals: {shrine.religionAndCulture.annualFestivals}
              </li>
              <li>
                Ritual Practices: {shrine.religionAndCulture.ritualPractices}
              </li>
              <li>Artifacts: {shrine.religionAndCulture.artifacts}</li>
              <li>Folklore: {shrine.religionAndCulture.folklore.join(' ')}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShrineList
