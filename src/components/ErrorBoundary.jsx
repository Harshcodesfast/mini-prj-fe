import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h3 className="text-center mt-5">⚠️ Failed to load data from server</h3>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
