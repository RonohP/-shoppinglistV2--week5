import { useForm } from 'react-hook-form';
import useLoggedIn from '../hooks/useLoggedIn';
import useContextGetter from '../hooks/useContextGetter';

const Register = () => {

  useLoggedIn();

  const { register, handleSubmit } = useForm();
  const context = useContextGetter();

  const handleRegister = ({ email, password, confirmPassword }) => {
    //check passwords match
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    //send request to api
    let newuser = {
      email: email,
      password: password,
    };

    fetch(`https://user-manager-three.vercel.app/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newuser),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error === true) {
          return alert(result.message);
        }

        context.dispatch({
          type: 'LOGIN',
          payload: result.body,
        });
      })
      .catch((err) => {
        alert('Error Occured! Try again ');
        console.log('this error occurred', {err});
      });
  };

  return (
    <div>
      <header className='App-header'>
        <h1>To-Do</h1>
      </header>
      <div id='id01' className='modal'>
        <form className='modal-content' onSubmit={handleSubmit(handleRegister)}>
          <div className='container'>
            <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
            <p style={{ textAlign: 'center' }}>
              Please fill in this form to create an account.
            </p>
            <hr />
            <input
              type='email'
              placeholder='Enter Email...'
              name='email'
              id='email'
              required
              {...register('email')}
            />
            <input
              type='password'
              placeholder='Enter Password...'
              name='psw'
              id='psw'
              required
              {...register('password')}
            />
            <input
              type='password'
              placeholder='Repeat Password...'
              name='psw-repeat'
              required
              {...register('confirmPassword')}
            />
            <p>
              By creating an account you agree to our{' '}
              <a href='/coming' style={{ color: 'dodgerblue' }}>
                Terms &amp; Privacy
              </a>
              .
              <br />
              <br />
              <a href='/login' style={{ color: 'dodgerblue' }}>
                Already Have an account
              </a>
            </p>
            <div className='clearfix'>
              <button type='submit' className='signupbtn'>
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer>
        <p>&copy; purity.rono 2021</p>
      </footer>
    </div>
  );
};

export default Register;
