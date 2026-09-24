import React, { Component } from 'react';
import { AlertOctagon, RotateCcw, Home } from 'lucide-react';
import Button from './Button';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 bg-gurukul-cream-100">
          <div className="max-w-lg w-full bg-white rounded-3xl border border-orange-200/80 p-8 text-center shadow-xl">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
              <AlertOctagon className="w-9 h-9" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">
              कुछ तकनीकी समस्या आ गई है
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              क्षमा करें, इस पृष्ठ को प्रदर्शित करने में कोई अप्रत्याशित बाधा आई है। कृपया पृष्ठ को पुनः लोड करें अथवा मुख्य पृष्ठ पर वापस जाएँ।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="primary"
                onClick={this.handleReload}
                icon={RotateCcw}
              >
                पृष्ठ पुनः लोड करें
              </Button>
              <Button
                variant="outline"
                onClick={this.handleGoHome}
                icon={Home}
              >
                मुख्य पृष्ठ पर जाएँ
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
