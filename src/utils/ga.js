/**
 * Source https://malloc.fi/using-google-analytics-with-next-js
 */
import ReactGA from 'react-ga'

const GA_KEY = 'UA-131750478-1';

export const initGA = () => {
  // console.log('GA init')
  ReactGA.initialize(GA_KEY)
}

export const logPageView = () => {
  // console.log('Logging pageview for ${window.location.pathname}')
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}