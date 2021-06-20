import { useForm } from 'react-hook-form';
import useLoggedIn from '../hooks/useLoggedIn';
import useContextGetter from '../hooks/useContextGetter';
import '../styles/App.css';

const Login = () => {
  
  useLoggedIn();
  console.log(useLoggedIn());

  const context = useContextGetter();

  const { register, handleSubmit } = useForm();

  const handleLogin = ({ email, password }) => {
    //send request to api for validation
    let userLogin = {
      email: email,
      password: password,
    };

    fetch(`https://user-manager-three.vercel.app/api/user/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          return alert(result.message);
        }

        context.dispatch({
          type: 'LOGIN',
          payload: result.body,
        });
      })
      .catch((err) => {
        alert('Error Occurred! Try again');
        console.log('this error occurred', {err});
      });
  };

  return (
    <div className='login-page'>
      <header className='App-header'>
        <h1>To-Do</h1>
      </header>

      <div id='id01' className='modal'>
        <form
          className='modal-content animate'
          onSubmit={handleSubmit(handleLogin)}
        >
          <h1 style={{ textAlign: 'center' }}>Login/ Sign in</h1>
          <div className='container'>
            <input
              type='email'
              placeholder='Enter email...'
              name='email'
              required
              {...register('email')}
            />
            <input
              type='password'
              placeholder='Enter Password...'
              name='psw'
              required
              {...register('password')}
            />
            <button type='submit'>Login</button>
          </div>
          <div className='container'>
            <span className='psw'>
              <a href='/coming' style={{ color: 'dodgerblue' }}>
                {' '}
                Forgot password?{' '}
              </a>
            </span>
          </div>
        </form>
      </div>
      <footer>
        <p>&copy; purity.rono 2021</p>
      </footer>
    </div>
  );
};

export default Login;
