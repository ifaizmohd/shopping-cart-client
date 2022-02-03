import React from "react";
import ErrorComponent from "./error.component";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasErrored: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) return <ErrorComponent />;
    return this.props.children;
  }
}

export default ErrorBoundary;
