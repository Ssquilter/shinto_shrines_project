import shrines from '../shrines'

const ShrineList = () => {
  console.log('Shrines:', shrines)
  return (
    <div className="main">
      <ul>
        {shrines.map((shrine, index) => (
          <li className="shrine-data" key={index}>
            <h2>{shrine.shrineName}</h2>
            <p>
              <strong>Location:</strong> {shrine.location.city},{' '}
              {shrine.location.prefecture}
            </p>
            <p>{shrine.summary}</p>
            <img
              src={shrine.image}
              alt={shrine.shrineName}
              style={{ width: '300px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShrineList
