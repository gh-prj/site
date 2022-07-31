import React, { Component, ErrorInfo, ReactNode } from "react";
import styles from './TestErrorBoundary.module.scss'

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: string;
}

class TestErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ hasError: true, error: error.message })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <h2>Error occured:</h2>
          <h3>{this.state.error}</h3>
        </div>
      );
    }

    return this.props.children;
  }
}

export default TestErrorBoundary;
