import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from "./ErrorBoundary"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
		  <App />
      </ErrorBoundary>
    </BrowserRouter>
	</React.StrictMode>
)