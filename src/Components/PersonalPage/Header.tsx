import { UseTypeText } from '../../Hooks/UseTypeText';
import Pyramids from '../Decorations/Pyramids';

const Header = () => {
  const fullName = 'KAMAL SELIM';
  // const fullNameِArabic = 'كمال سليم';

  const { displayText } = UseTypeText(fullName, 200);

  return (
    <header className='header'>
      <div className='header--container'>
        <div className='header__image'></div>
        <h1 className='header__name'>
          {displayText.map((letter: string, index: number) => {
            return (
              <span
                className={`header__name--letter ${
                  letter === ' ' ? 'margin__right--2' : ''
                }`}
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </h1>
      </div>
      <Pyramids />
    </header>
  );
};

export default Header;
