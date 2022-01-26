import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.css';

const SignInAndSignUpPage = () => (
  <div className='auth-wrapper'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
