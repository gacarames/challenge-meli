import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // UI de emergencia
      return (
        <div>
          <h1>Hubo un error:</h1>
          <p>{this.state.errorMessage}</p>
          <Button styleButton="primary" fullWidth>
            Recargar la pagina
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
