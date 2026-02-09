import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("3D Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (typeof this.props.fallback === "function") {
          return this.props.fallback(this.state.error);
      }
      return this.props.fallback || <div className="hidden">3D Error</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
