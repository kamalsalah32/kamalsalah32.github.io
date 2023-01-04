import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import { MdOutlineEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  const iconSize = '4rem';
  return (
    <footer className='footer'>
      <a href='https://www.linkedin.com/in/kamalsalah32/' target='_blank'>
        <BsLinkedin color='white' size={iconSize} />
      </a>
      <a href='https://github.com/Kamalsalah32' target='_blank'>
        <BsGithub color='white' size={iconSize} />
      </a>
      <a href='https://www.instagram.com/kamalsalah_/' target='_blank'>
        <BsInstagram color='white' size={iconSize} />
      </a>
      <a
        href='https://www.facebook.com/profile.php?id=100075535462095'
        target='_blank'
      >
        <BsFacebook color='white' size={iconSize} />
      </a>
      <a href='mailto: kamalsalah32@gmail.com'>
        <MdOutlineEmail color='white' size={iconSize} />
      </a>
      <a href='tel: +4915734805138'>
        <MdPhone color='white' size={iconSize} />
      </a>
    </footer>
  );
};

export default Footer;
