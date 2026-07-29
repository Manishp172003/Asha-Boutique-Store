// User Service
// This service will eventually connect to Spring Boot backend APIs
// Currently returns mock data with simulated API delay

const SIMULATED_DELAY = 600; // ms

// Mock user data (will be replaced by API calls)
const mockUser = {
  id: 'user-123',
  name: 'Test User',
  email: 'test@example.com',
  phone: '+91 9876543210',
  avatar: null
};

const mockAddresses = [
  {
    id: 'addr-1',
    firstName: 'Test',
    lastName: 'User',
    address: '123 Test Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400001',
    country: 'India',
    phone: '+91 9876543210',
    isDefault: true
  },
  {
    id: 'addr-2',
    firstName: 'Test',
    lastName: 'User',
    address: '456 Office Lane',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400002',
    country: 'India',
    phone: '+91 9876543210',
    isDefault: false
  }
];

/**
 * Get user profile
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User profile
 */
export const getUserProfile = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve(mockUser);
      } else {
        reject(new Error('User not found'));
      }
    }, SIMULATED_DELAY);
  });
};

/**
 * Update user profile
 * @param {string} userId - User ID
 * @param {Object} profileData - Profile data to update
 * @returns {Promise<Object>} Updated user profile
 */
export const updateUserProfile = async (userId, profileData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedUser = { ...mockUser, ...profileData };
      resolve(updatedUser);
    }, SIMULATED_DELAY);
  });
};

/**
 * Get user addresses
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of addresses
 */
export const getUserAddresses = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAddresses);
    }, SIMULATED_DELAY);
  });
};

/**
 * Add new address
 * @param {string} userId - User ID
 * @param {Object} addressData - Address data
 * @returns {Promise<Object>} Created address
 */
export const addAddress = async (userId, addressData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newAddress = {
        id: `addr-${Date.now()}`,
        ...addressData,
        isDefault: mockAddresses.length === 0
      };
      resolve(newAddress);
    }, SIMULATED_DELAY);
  });
};

/**
 * Update address
 * @param {string} addressId - Address ID
 * @param {Object} addressData - Address data to update
 * @returns {Promise<Object>} Updated address
 */
export const updateAddress = async (addressId, addressData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const address = mockAddresses.find(a => a.id === addressId);
      if (address) {
        const updatedAddress = { ...address, ...addressData };
        resolve(updatedAddress);
      } else {
        reject(new Error('Address not found'));
      }
    }, SIMULATED_DELAY);
  });
};

/**
 * Delete address
 * @param {string} addressId - Address ID
 * @returns {Promise<void>}
 */
export const deleteAddress = async (addressId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockAddresses.findIndex(a => a.id === addressId);
      if (index !== -1) {
        resolve();
      } else {
        reject(new Error('Address not found'));
      }
    }, SIMULATED_DELAY);
  });
};

/**
 * Set default address
 * @param {string} addressId - Address ID
 * @returns {Promise<Object>} Updated address
 */
export const setDefaultAddress = async (addressId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const address = mockAddresses.find(a => a.id === addressId);
      if (address) {
        resolve(address);
      } else {
        reject(new Error('Address not found'));
      }
    }, SIMULATED_DELAY);
  });
};
