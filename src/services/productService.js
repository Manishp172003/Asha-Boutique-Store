// Product Service
// This service will eventually connect to Spring Boot backend APIs
// Currently returns mock data with simulated API delay

const SIMULATED_DELAY = 600; // ms

// Mock product data (will be replaced by API calls)
const mockProducts = [
  { id: 1, name: 'Elegant Pearl Necklace', price: 2499, image: '/images/product1.jpg', category: 'Necklace', rating: 4.8, isNew: true, isSale: false },
  { id: 2, name: 'Golden Diamond Ring', price: 1999, image: '/images/product2.jpg', category: 'Ring', rating: 4.7, isNew: false, isSale: true },
  { id: 3, name: 'Luxury Gold Bracelet', price: 1799, image: '/images/product3.jpg', category: 'Bracelet', rating: 4.9, isNew: true, isSale: false },
  { id: 4, name: 'Classic Pearl Earrings', price: 1299, image: '/images/product4.jpg', category: 'Earrings', rating: 4.6, isNew: false, isSale: false },
  { id: 5, name: 'Royal Bridal Set', price: 5999, image: '/images/product5.jpg', category: 'Wedding', rating: 5.0, isNew: false, isSale: true },
  { id: 6, name: 'Minimal Chain Necklace', price: 1499, image: '/images/product6.jpg', category: 'Necklace', rating: 4.5, isNew: true, isSale: false },
  { id: 7, name: 'Pleat-Front Blouse', price: 2400, image: '/images/product1.jpg', category: 'Tops', rating: 4.7, isNew: true, isSale: false },
  { id: 8, name: 'Tiered Midi Dress', price: 3800, image: '/images/product2.jpg', category: 'Dresses', rating: 4.8, isNew: true, isSale: false },
  { id: 9, name: 'Tailored Trousers', price: 2900, image: '/images/product3.jpg', category: 'Tailoring', rating: 4.6, isNew: false, isSale: true },
  { id: 10, name: 'Cropped Linen Jacket', price: 3200, image: '/images/product4.jpg', category: 'Tops', rating: 4.9, isNew: true, isSale: false },
  { id: 11, name: 'Handloom Kurta Set', price: 4100, image: '/images/product5.jpg', category: 'Dresses', rating: 4.8, isNew: false, isSale: true },
  { id: 12, name: 'Silk Scarf', price: 1200, image: '/images/product6.jpg', category: 'Accessories', rating: 4.5, isNew: true, isSale: false },
  { id: 13, name: 'Embroidered Tote', price: 1800, image: '/images/product7.jpg', category: 'Accessories', rating: 4.7, isNew: false, isSale: false },
  { id: 14, name: 'Block-Print Dupatta', price: 1500, image: '/images/product8.jpg', category: 'Accessories', rating: 4.6, isNew: true, isSale: false },
];

const mockProductDetails = {
  1: { description: 'An elegant pearl necklace featuring lustrous freshwater pearls on a delicate gold chain. Perfect for special occasions and evening wear.', fabric: 'Freshwater pearls, 18K gold-plated chain', fit: 'Adjustable length 16-18 inches', care: 'Wipe with soft cloth, avoid water', delivery: 'Ready to ship in 2-3 days', stock: 15 },
  2: { description: 'A stunning golden diamond ring with a brilliant-cut center stone, surrounded by smaller accent diamonds for maximum sparkle.', fabric: '18K gold, lab-grown diamonds', fit: 'Available in sizes 5-9', care: 'Professional cleaning recommended', delivery: 'Ready to ship in 3-4 days', stock: 12 },
  3: { description: 'A luxury gold bracelet with intricate filigree work, featuring a secure clasp and comfortable everyday wear design.', fabric: '22K gold', fit: 'Adjustable 7-8 inches', care: 'Polish with gold cloth', delivery: 'Ready to ship in 2-3 days', stock: 18 },
  4: { description: 'Classic pearl earrings with a timeless design, featuring lustrous pearls on elegant posts for secure and comfortable wear.', fabric: 'Akoya pearls, sterling silver posts', fit: 'Standard post back', care: 'Store in soft pouch', delivery: 'Ready to ship in 1-2 days', stock: 20 },
  5: { description: 'A royal bridal set including necklace, earrings, and maang tikka, crafted with traditional Kundan work and premium stones.', fabric: 'Kundan, semi-precious stones', fit: 'Customizable', care: 'Professional cleaning only', delivery: 'Ready to ship in 5-7 days', stock: 8 },
  6: { description: 'A minimal chain necklace with a delicate design, perfect for layering or wearing alone for an understated elegant look.', fabric: 'Sterling silver, gold vermeil', fit: 'Adjustable 16-20 inches', care: 'Avoid harsh chemicals', delivery: 'Ready to ship in 2-3 days', stock: 25 },
  7: { description: 'A refined blouse with soft pleat detailing, tailored for easy movement and a polished everyday shape.', fabric: 'Cotton-silk blend', fit: 'Relaxed shoulder with a neat waist', care: 'Gentle hand wash or dry clean', delivery: 'Ready to ship in 2-3 days', stock: 20 },
  8: { description: 'A graceful midi dress with tiered movement, finished with a flattering neckline and fluid drape.', fabric: 'Soft rayon voile', fit: 'Easy fit with a defined waist', care: 'Cold wash separately', delivery: 'Ready to ship in 3-4 days', stock: 16 },
  9: { description: 'Structured trousers finished for everyday comfort, with a clean front and ankle-skimming length.', fabric: 'Cotton twill', fit: 'High-rise straight fit', care: 'Machine wash mild', delivery: 'Ready to ship in 4-5 days', stock: 18 },
  10: { description: 'A light cropped jacket in breathable linen, ideal for layering over dresses, kurtas, and camisoles.', fabric: 'Washed linen', fit: 'Boxy cropped fit', care: 'Dry clean recommended', delivery: 'Ready to ship in 3-4 days', stock: 14 },
  11: { description: 'A handloom kurta set with boutique finishing, balanced for festive days and relaxed evenings.', fabric: 'Handloom cotton', fit: 'Straight kurta with easy trousers', care: 'Hand wash in cold water', delivery: 'Ready to ship in 5-7 days', stock: 12 },
  12: { description: 'A soft silk scarf for effortless layering, adding a quiet accent to workwear and occasion looks.', fabric: 'Silk blend', fit: 'One size', care: 'Dry clean only', delivery: 'Ready to ship in 1-2 days', stock: 25 },
  13: { description: 'A carry-all tote with embroidered detailing, sized for daily errands, books, and boutique finds.', fabric: 'Canvas with thread embroidery', fit: 'Spacious interior pocket', care: 'Spot clean gently', delivery: 'Ready to ship in 2-3 days', stock: 22 },
  14: { description: 'A block-print dupatta with a light drape, made to pair with classic kurtas and simple dresses.', fabric: 'Mul cotton', fit: 'Full-length drape', care: 'Cold wash separately', delivery: 'Ready to ship in 2-3 days', stock: 24 },
};

/**
 * Get all products
 * @returns {Promise<Array>} Array of products
 */
export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, SIMULATED_DELAY);
  });
};

/**
 * Get product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Product details
 */
export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === parseInt(id));
      if (product) {
        resolve({
          ...product,
          ...mockProductDetails[id]
        });
      } else {
        reject(new Error('Product not found'));
      }
    }, SIMULATED_DELAY);
  });
};

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} Array of products in category
 */
export const getProductsByCategory = async (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = category === 'All' 
        ? mockProducts 
        : mockProducts.filter(p => p.category === category);
      resolve(filtered);
    }, SIMULATED_DELAY);
  });
};

/**
 * Search products
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching products
 */
export const searchProducts = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, SIMULATED_DELAY);
  });
};
