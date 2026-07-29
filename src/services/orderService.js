// Order Service
// This service will eventually connect to Spring Boot backend APIs
// Currently returns mock data with simulated API delay

const SIMULATED_DELAY = 600; // ms

// Mock order data (will be replaced by API calls)
const mockOrders = [
  {
    id: 'ORD-123456-789',
    items: [
      { id: 1, name: 'Elegant Pearl Necklace', price: 2499, quantity: 1, image: '/images/product1.jpg' }
    ],
    total: 2499,
    shippingInfo: {
      firstName: 'Test',
      lastName: 'User',
      address: '123 Test Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    },
    paymentMethod: 'card',
    status: 'processing',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    tracking: [
      { status: 'confirmed', message: 'Order confirmed', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
      { status: 'processing', message: 'Processing your order', timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() },
      { status: 'shipped', message: 'Order shipped', timestamp: null },
      { status: 'delivered', message: 'Order delivered', timestamp: null },
    ]
  }
];

/**
 * Get all orders for a user
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of orders
 */
export const getUserOrders = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockOrders);
    }, SIMULATED_DELAY);
  });
};

/**
 * Get order by ID
 * @param {string} orderId - Order ID
 * @returns {Promise<Object>} Order details
 */
export const getOrderById = async (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = mockOrders.find(o => o.id === orderId);
      if (order) {
        resolve(order);
      } else {
        reject(new Error('Order not found'));
      }
    }, SIMULATED_DELAY);
  });
};

/**
 * Create a new order
 * @param {Object} orderData - Order data
 * @returns {Promise<Object>} Created order
 */
export const createOrder = async (orderData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newOrder = {
        id: `ORD-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        ...orderData,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        tracking: [
          { status: 'confirmed', message: 'Order confirmed', timestamp: new Date().toISOString() },
          { status: 'processing', message: 'Processing your order', timestamp: null },
          { status: 'shipped', message: 'Order shipped', timestamp: null },
          { status: 'delivered', message: 'Order delivered', timestamp: null },
        ]
      };
      resolve(newOrder);
    }, SIMULATED_DELAY);
  });
};

/**
 * Update order status
 * @param {string} orderId - Order ID
 * @param {string} status - New status
 * @returns {Promise<Object>} Updated order
 */
export const updateOrderStatus = async (orderId, status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = mockOrders.find(o => o.id === orderId);
      if (order) {
        order.status = status;
        const trackingStep = order.tracking.find(step => step.status === status);
        if (trackingStep) {
          trackingStep.timestamp = new Date().toISOString();
        }
        resolve(order);
      } else {
        reject(new Error('Order not found'));
      }
    }, SIMULATED_DELAY);
  });
};
