import React from 'react';
import ComingSoon from './components/ComingSoon';

class ErrorFallback extends React.Component<{ error: Error }> {
  render() {
    return (
      <div className="text-white p-4">
        <h1>Something went wrong:</h1>
        <pre>{this.props.error.message}</pre>
      </div>
    );
  }
}

class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error!} />;
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <AppErrorBoundary>
      <div className="w-full h-full">
        <ComingSoon />
      </div>
    </AppErrorBoundary>
  );
};

export default App;
