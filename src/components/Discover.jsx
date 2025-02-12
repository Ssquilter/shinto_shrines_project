const Discover = () => {
  return (
    <section className="discoverSection">
      <h2 className="discoverHeader">DISCOVER</h2>
      <hr className="discoverLine" />

      <div className="discover">
        <div className="discoverItem">
          <img
            className="discoverImage"
            src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/10/Golden-Gai-Street-1024x600.jpg"
            alt="red lanterns adorn tokyo street"
          />
          <h3>A Night Out in Golden Gai</h3>
          <p>
            Tokyo’s famous bar district features narrow alleys that lead to
            hidden gems. The vibrant streets showcase a captivating blend of
            traditional izakayas and modern cocktail bars, merging culinary
            heritage with contemporary innovation.
          </p>
        </div>

        <div className="discoverItem">
          <img
            className="discoverImage"
            src="https://www.kumicontemporary.com/media/1477958400/1479600000/hush-prints-2021b-mob-jpg.jpeg"
            alt="collage artwork"
          />
          <h3>Modern Japanese Art</h3>
          <p>
            Experience the dynamic world of contemporary Japanese street art.
            Discover how bold colors and innovative techniques reflect the
            vibrant culture and social commentary of modern Japan.
          </p>
        </div>

        <div className="discoverItem">
          <img
            className="discoverImage"
            src="https://snipstock.com/wp-content/uploads/2024/10/aseef11i7345_A_Lawson_convenience_store_with_Mount_Fuji_in_the__c0a635bf-3a4c-4360-93da-4055dbf55ece.png"
            alt="mount fuji appears behind a convenience store"
          />
          <h3>Fuji & The Everyday</h3>
          <p>
            The trend of influencers capturing photos in front of convenience
            stores with Mount Fuji in the background has become a popular way to
            showcase the blend of urban life and stunning natural beauty.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Discover
