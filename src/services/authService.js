import api from './api'

// Token storage keys
const TOKEN_KEY = 'token'
const USER_EMAIL_KEY = 'userEmail'
const USER_NAME_KEY = 'userName'

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Response with token and user data
 */
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    })
    
    // Store token and user data in localStorage
    if (response.data.token) {
      localStorage.setItem(TOKEN_KEY, response.data.token)
    }
    
    if (response.data.user) {
      localStorage.setItem(USER_EMAIL_KEY, response.data.user.email)
      localStorage.setItem(USER_NAME_KEY, response.data.user.name)
    }
    
    return response.data
  } catch (error) {
    // Handle different error types
    if (error.response) {
      // Backend returned error (400, 401, etc.)
      throw new Error(error.response.data.message || 'Login failed')
    } else if (error.request) {
      // Request made but no response
      throw new Error('Network error. Please check your connection.')
    } else {
      // Something else happened
      throw new Error('An unexpected error occurred')
    }
  }
}

/**
 * Register new user
 * @param {Object} userData - User registration data
 * @returns {Promise} - Response with token and user data
 */
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData)
    
    // Store token and user data in localStorage
    if (response.data.token) {
      localStorage.setItem(TOKEN_KEY, response.data.token)
    }
    
    if (response.data.email) {
      localStorage.setItem(USER_EMAIL_KEY, response.data.email)
    }
    
    if (response.data.name) {
      localStorage.setItem(USER_NAME_KEY, response.data.name)
    }
    
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Registration failed')
    } else if (error.request) {
      throw new Error('Network error. Please check your connection.')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

/**
 * Logout user - Clear token and user data from localStorage
 */
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_EMAIL_KEY)
  localStorage.removeItem(USER_NAME_KEY)
}

/**
 * Get JWT token from localStorage
 * @returns {string|null} - JWT token or null
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

/**
 * Get user email from localStorage
 * @returns {string|null} - User email or null
 */
export const getUserEmail = () => {
  return localStorage.getItem(USER_EMAIL_KEY)
}

/**
 * Get user name from localStorage
 * @returns {string|null} - User name or null
 */
export const getUserName = () => {
  return localStorage.getItem(USER_NAME_KEY)
}

/**
 * Check if user is authenticated
 * @returns {boolean} - True if token exists
 */
export const isAuthenticated = () => {
  const token = getToken()
  return !!token
}

/**
 * Get current user data
 * @returns {Object|null} - User data or null
 */
export const getCurrentUser = () => {
  const token = getToken()
  const email = getUserEmail()
  const name = getUserName()
  
  if (token && email) {
    return {
      email,
      name,
    }
  }
  
  return null
}

export default {
  login,
  register,
  logout,
  getToken,
  getUserEmail,
  getUserName,
  isAuthenticated,
  getCurrentUser,
}
