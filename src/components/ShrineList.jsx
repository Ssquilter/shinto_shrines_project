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

            <div>
              <strong>Type of Shrine:</strong>
            </div>
            <ul>
              <li>Category: {shrine.typeOfShrine.shrineCategory}</li>
              <li>Enshrined Kami: {shrine.typeOfShrine.enshrinedKami}</li>
            </ul>

            <div>
              <strong>Architectural Features:</strong>
            </div>
            <ul>
              {shrine.architecturalFeatures.toriiGate && <li>Torii Gate</li>}
              {shrine.architecturalFeatures.honden && <li>Honden</li>}
              {shrine.architecturalFeatures.haiden && <li>Haiden</li>}
            </ul>

            <div>
              <strong>Religion & Culture:</strong>
            </div>
            <ul>
              <li>
                <span className="label">Annual Festivals:</span>{' '}
                {shrine.religionAndCulture.annualFestivals}
              </li>
              <li>
                <span className="label">Ritual Practices:</span>{' '}
                {shrine.religionAndCulture.ritualPractices.join(' ')}
              </li>
              <li>
                <span className="label">Artifacts:</span>{' '}
                {shrine.religionAndCulture.artifacts.join(' ')}
              </li>
              <li>
                <span className="label">Folklore:</span>{' '}
                {shrine.religionAndCulture.folklore.join(' ')}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShrineList
