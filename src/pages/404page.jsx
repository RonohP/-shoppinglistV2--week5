import '../styles/404page.css';
import logo from '../logo.svg'

const Error = () => {
  return (
    <main>
      <img src={logo} className="logo" alt="logo"/>
            <p id='errorText'>O-o-oh! Something broke.</p>
      <a id='errorLink' href='/home'>
        Go Back
      </a>
    </main>
  );
};

export default Error;
