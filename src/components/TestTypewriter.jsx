import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TestTypewriter = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Graphic Designer', 'UI/UX Designer'],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <>
    <span /> <br />{text}
    <span /> <Cursor cursorStyle="|" />
    </>
  );
};

export default TestTypewriter;