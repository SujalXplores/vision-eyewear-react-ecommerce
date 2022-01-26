import { Component } from 'react';
import './error-boundary.styles.css';

const ErrorComponent = () => {
  return (
    <div className='error-image-overlay'>
      <div
        className='error-image-container'
        style={{ backgroundImage: 'url(https://i.imgur.com/yW2W9SC.png)' }}
      ></div>
      <h2 className='error-image-text'>Something went wrong!</h2>
    </div>
  );
};

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: { message: '', stack: '' },
    info: { componentStack: '' },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;
    console.log(error, info);

    return hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;
