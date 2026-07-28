// Token storage keys
const TOKEN_KEY = 'token'
const USER_EMAIL_KEY = 'userEmail'
const USER_NAME_KEY = 'userName'
const MOCK_USERS_KEY = 'mock_users'

/**
 * Get all mock users from localStorage
 * @returns {Array} - Array of mock users
 */
const getMockUsers = () => {
  const users = localStorage.getItem(MOCK_USERS_KEY)
  return users ? JSON.parse(users) : []
}

/**
 * Save mock users to localStorage
 * @param {Array} users - Array of mock users
 */
const saveMockUsers = (users) => {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users))
}

/**
 * Login user with email and password (Mock implementation)
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Response with token and user data
 */
export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const users = getMockUsers()
        const user = users.find(u => u.email === email && u.password === password)
        
        if (!user) {
          reject(new Error('Invalid email or password'))
          return
        }
        
        // Generate a mock token
        const token = 'mock_token_' + Date.now()
        
        // Store token and user data in localStorage
        localStorage.setItem(TOKEN_KEY, token)
        localStorage.setItem(USER_EMAIL_KEY, user.email)
        localStorage.setItem(USER_NAME_KEY, user.name)
        
        resolve({
          token,
          user: {
            email: user.email,
            name: user.name
          }
        })
      } catch (error) {
        reject(new Error('Login failed'))
      }
    }, 500) // Simulate network delay
  })
}

/**
 * Register new user (Mock implementation)
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} name - User name
 * @returns {Promise} - Response with token and user data
 */
export const register = async (email, password, name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const users = getMockUsers()
        
        // Check if user already exists
        if (users.find(u => u.email === email)) {
          reject(new Error('User with this email already exists'))
          return
        }
        
        // Create new user
        const newUser = {
          email,
          password,
          name,
          createdAt: new Date().toISOString()
        }
        
        // Save to localStorage
        users.push(newUser)
        saveMockUsers(users)
        
        // Generate a mock token
        const token = 'mock_token_' + Date.now()
        
        // Store token and user data in localStorage
        localStorage.setItem(TOKEN_KEY, token)
        localStorage.setItem(USER_EMAIL_KEY, email)
        localStorage.setItem(USER_NAME_KEY, name)
        
        resolve({
          token,
          user: {
            email,
            name
          }
        })
      } catch (error) {
        reject(new Error('Registration failed'))
      }
    }, 500) // Simulate network delay
  })
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
