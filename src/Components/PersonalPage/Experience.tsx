const Experience = () => {
  return (
    <section>
      {/* Inga. */}
      <div className='experience-item__inga'>
        <div className='experience-item__inga--main-info'>
          <div className='experience-item__inga--logo'></div>
          <div className='experience-item__title'>
            <h2 className='experience-item__title--main'>Inga.</h2>
            <span className='experience-item__title--sub'>
              Fullstack Developer NodeJS/React
            </span>
            <span className='experience-item__inga--period'>
              February 2022 - December 2022
            </span>
          </div>
        </div>
        <ul>
          <li>
            <strong>
              Backend work with
              <span className='experience-item__inga--text-to-highlight'>
                Facebook Marketing API
              </span>
            </strong>
          </li>
          <li>
            <strong>
              Automated the ad publishing process with
              <span className='experience-item__inga--text-to-highlight'>
                CRON
              </span>
              jobs using
              <span className='experience-item__inga--text-to-highlight'>
                Integromat & Airtable
              </span>
            </strong>
          </li>
          <li>
            <strong>
              Frontend work with
              <span className='experience-item__inga--text-to-highlight'>
                React
              </span>
              incorporating
              <span className='experience-item__inga--text-to-highlight'>
                Google Maps API
              </span>
            </strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
