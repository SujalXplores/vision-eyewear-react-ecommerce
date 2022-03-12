import { Component } from 'react';
import styles from './error-boundary.module.css';

const ErrorComponent = () => {
  return (
    <div className={styles['error-image-overlay']}>
      <div className={styles['error-image-container']}></div>
      <h2 className={styles['error-image-text']}>Something went wrong!</h2>
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
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;
