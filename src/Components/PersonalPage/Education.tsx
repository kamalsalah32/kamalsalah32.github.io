import TUMLogo from '../Decorations/TUMLogo';

const Education = () => {
  return (
    <section>
      {/* TUM */}
      <div className='education-item__TUM'>
        <TUMLogo />
        <div className='education-item__title'>
          <h2 className='education-item__title--main'>
            Technical University in Munich
          </h2>
          <span className='education-item__title--sub'>
            Master's of Informatics
          </span>
          <span className='education-item__TUM--period'>
            October 2021 - Present
          </span>
        </div>
      </div>
      {/* GUC */}
      <div className='education-item__GUC'>
        <div className='education-item__GUC--main-info'>
          <div className='education-item__GUC--logo'></div>
          <div className='education-item__title'>
            <h2 className='education-item__title--main'>
              German University in Cairo
            </h2>
            <span className='education-item__title--sub'>
              Bachelor's of Computer Science and Engineering
            </span>
            <span className='education-item__GUC--period'>
              October 2016 - July 2021
            </span>
          </div>
        </div>
        <ul>
          <li>
            <strong>
              Graduated with
              <span className='education-item__GUC--text-to-highlight'>
                GPA 1.3
              </span>
            </strong>
          </li>
          <li>
            <strong>
              Wrote my Bachelor's Thesis titled
              <span className='education-item__GUC--text-to-highlight'>
                "Hardware-Aware Deep Neural Networks for Fault Detection in
                Solenoid Valves"
              </span>
              at the University of Stuttgart in 2020 with a grade of
              <span className='education-item__GUC--text-to-highlight'>A-</span>
            </strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
