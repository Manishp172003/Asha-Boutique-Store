# Asha Boutique Store - Backend Design Documentation

## Table of Contents
1. [Backend Overview](#backend-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Architecture](#architecture)
5. [Database Design](#database-design)
6. [API Endpoints](#api-endpoints)
7. [Authentication & Authorization](#authentication--authorization)
8. [Data Models](#data-models)
9. [Service Layer](#service-layer)
10. [Repository Layer](#repository-layer)
11. [Exception Handling](#exception-handling)
12. [Validation](#validation)
13. [Configuration](#configuration)
14. [Integration with Frontend](#integration-with-frontend)
15. [Security](#security)
16. [Deployment](#deployment)
17. [Testing](#testing)
18. [Performance Optimization](#performance-optimization)
19. [Monitoring & Logging](#monitoring--logging)
20. [Future Enhancements](#future-enhancements)

---

## Backend Overview

**Project Name:** Asha Boutique Store Backend  
**Type:** RESTful API Service  
**Domain:** E-commerce / Fashion Boutique  
**Architecture:** Spring Boot Microservice

**Purpose:**
Provide a robust, scalable backend API for the Asha Boutique Store frontend, handling:
- Product catalog management
- User authentication and authorization
- Shopping cart operations
- Order processing and management
- Appointment booking system
- Inventory management
- Payment integration

**Key Design Principles:**
- RESTful API design
- JWT-based authentication
- Clean architecture with layered design
- Database-first approach with JPA/Hibernate
- Comprehensive validation and error handling
- Secure by default
- Cloud-native deployment ready

---

## Tech Stack

### Core Framework
- **Java 17** - Programming language (LTS version)
- **Spring Boot 3.2.x** - Application framework
- **Spring Web** - REST API support
- **Spring Data JPA** - Database abstraction
- **Spring Security** - Authentication and authorization
- **Spring Validation** - Input validation

### Database
- **MySQL 8.0+** - Primary relational database
- **H2 Database** - In-memory database for development/testing
- **Flyway** - Database migration tool
- **Hibernate** - JPA implementation (ORM)

### Authentication & Security
- **Spring Security 6.x** - Security framework
- **JWT (jjwt)** - JSON Web Token implementation
- **BCrypt** - Password hashing
- **OAuth2 Resource Server** - Optional OAuth2 support

### API Documentation
- **SpringDoc OpenAPI 3.x** - API documentation (Swagger UI)
- **Swagger Annotations** - API endpoint documentation

### Utilities
- **Lombok** - Reduce boilerplate code
- **MapStruct** - Bean mapping
- **ModelMapper** - Object mapping (alternative to MapStruct)
- **Apache Commons Lang** - Utility functions
- **Apache Commons Collections** - Collection utilities

### Testing
- **JUnit 5** - Testing framework
- **Mockito** - Mocking framework
- **Spring Boot Test** - Spring testing support
- **TestContainers** - Integration testing with real containers
- **RestAssured** - REST API testing

### Build Tools
- **Maven 3.9+** - Build and dependency management
- **Spring Boot Maven Plugin** - Spring Boot packaging

### Deployment
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Kubernetes** - Container orchestration (optional)
- **AWS / Azure / GCP** - Cloud deployment options

### Monitoring & Logging
- **Spring Boot Actuator** - Application monitoring
- **Micrometer** - Metrics collection
- **Prometheus** - Metrics monitoring
- **Grafana** - Metrics visualization
- **ELK Stack** - Logging (Elasticsearch, Logstash, Kibana)
- **SLF4J + Logback** - Logging framework

### Caching
- **Spring Cache** - Caching abstraction
- **Redis** - Distributed caching (optional)
- **Caffeine** - In-memory caching

### Message Queue (Optional)
- **Spring Boot RabbitMQ** - Message broker
- **Spring Boot Kafka** - Event streaming

### Payment Integration
- **Stripe Java SDK** - Payment processing
- **Razorpay Java SDK** - Alternative payment gateway

### Email Service
- **Spring Boot Mail** - Email sending
- **SendGrid** - Email service provider (optional)

---

## Project Structure

```
asha-boutique-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/ashaboutique/
│   │   │       ├── AshaBoutiqueApplication.java    # Main application class
│   │   │       ├── config/                         # Configuration classes
│   │   │       │   ├── SecurityConfig.java         # Spring Security config
│   │   │       │   ├── JwtConfig.java              # JWT configuration
│   │   │       │   ├── SwaggerConfig.java          # OpenAPI/Swagger config
│   │   │       │   ├── CacheConfig.java            # Caching configuration
│   │   │       │   ├── CorsConfig.java             # CORS configuration
│   │   │       │   └── MailConfig.java              # Email configuration
│   │   │       ├── controller/                     # REST controllers
│   │   │       │   ├── AuthController.java         # Authentication endpoints
│   │   │       │   ├── ProductController.java      # Product endpoints
│   │   │       │   ├── CartController.java         # Shopping cart endpoints
│   │   │       │   ├── OrderController.java        # Order endpoints
│   │   │       │   ├── UserController.java         # User management
│   │   │       │   ├── BookingController.java      # Appointment booking
│   │   │       │   └── TestimonialController.java   # Testimonials
│   │   │       ├── service/                        # Business logic layer
│   │   │       │   ├── AuthService.java            # Authentication service
│   │   │       │   ├── ProductService.java         # Product service
│   │   │       │   ├── CartService.java            # Cart service
│   │   │       │   ├── OrderService.java           # Order service
│   │   │       │   ├── UserService.java            # User service
│   │   │       │   ├── BookingService.java        # Booking service
│   │   │       │   ├── TestimonialService.java     # Testimonial service
│   │   │       │   ├── JwtService.java             # JWT token service
│   │   │       │   └── EmailService.java           # Email service
│   │   │       ├── repository/                     # Data access layer
│   │   │       │   ├── UserRepository.java
│   │   │       │   ├── ProductRepository.java
│   │   │       │   ├── CartRepository.java
│   │   │       │   ├── OrderRepository.java
│   │   │       │   ├── BookingRepository.java
│   │   │       │   └── TestimonialRepository.java
│   │   │       ├── model/                          # Domain models (JPA entities)
│   │   │       │   ├── User.java
│   │   │       │   ├── Product.java
│   │   │       │   ├── Cart.java
│   │   │       │   ├── CartItem.java
│   │   │       │   ├── Order.java
│   │   │       │   ├── OrderItem.java
│   │   │       │   ├── Booking.java
│   │   │       │   └── Testimonial.java
│   │   │       ├── dto/                            # Data Transfer Objects
│   │   │       │   ├── request/                    # Request DTOs
│   │   │       │   │   ├── LoginRequest.java
│   │   │       │   │   ├── RegisterRequest.java
│   │   │       │   │   ├── CartRequest.java
│   │   │       │   │   ├── OrderRequest.java
│   │   │       │   │   └── BookingRequest.java
│   │   │       │   ├── response/                   # Response DTOs
│   │   │       │   │   ├── AuthResponse.java
│   │   │       │   │   ├── ProductResponse.java
│   │   │       │   │   ├── CartResponse.java
│   │   │       │   │   ├── OrderResponse.java
│   │   │       │   │   └── BookingResponse.java
│   │   │       │   └── mapper/                     # DTO mappers
│   │   │       │       ├── ProductMapper.java
│   │   │       │       ├── OrderMapper.java
│   │   │       │       └── UserMapper.java
│   │   │       ├── exception/                      # Custom exceptions
│   │   │       │   ├── ResourceNotFoundException.java
│   │   │       │   ├── BadRequestException.java
│   │   │       │   ├── UnauthorizedException.java
│   │   │       │   └── GlobalExceptionHandler.java
│   │   │       ├── security/                       # Security components
│   │   │       │   ├── JwtAuthenticationFilter.java
│   │   │       │   ├── UserDetailsServiceImpl.java
│   │   │       │   └── JwtUtil.java
│   │   │       ├── util/                           # Utility classes
│   │   │       │   ├── Constants.java
│   │   │       │   └── DateUtil.java
│   │   │       └── enums/                          # Enumerations
│   │   │           ├── Role.java
│   │   │           ├── OrderStatus.java
│   │   │           ├── Category.java
│   │   │           └── BookingStatus.java
│   │   └── resources/
│   │       ├── application.yml                     # Application configuration
│   │       ├── application-dev.yml                 # Development config
│   │       ├── application-prod.yml                # Production config
│   │       ├── application-test.yml                # Test config
│   │       ├── db/migration/                        # Flyway migrations
│   │       │   ├── V1__create_schema.sql
│   │       │   ├── V2__create_users.sql
│   │       │   ├── V3__create_products.sql
│   │       │   ├── V4__create_orders.sql
│   │       │   └── V5__create_bookings.sql
│   │       └── static/                             # Static resources
│   ├── test/
│   │   ├── java/
│   │   │   └── com/ashaboutique/
│   │   │       ├── controller/                     # Controller tests
│   │   │       ├── service/                         # Service tests
│   │   │       ├── repository/                      # Repository tests
│   │   │       └── integration/                     # Integration tests
│   │   └── resources/
│   │       ├── application-test.yml
│   │       └── test-data.sql
├── Dockerfile                                      # Docker image definition
├── docker-compose.yml                              # Docker Compose configuration
├── pom.xml                                         # Maven dependencies
├── .gitignore                                      # Git ignore rules
├── README.md                                       # Backend documentation
└── BACK.md                                         # This design document
```

---

## Architecture

### Architectural Pattern
**Pattern:** Layered Architecture (N-Tier Architecture)

### Layers

#### 1. Presentation Layer (Controller)
- REST API endpoints
- Request validation
- Response formatting
- HTTP status codes

#### 2. Business Logic Layer (Service)
- Business rules
- Transaction management
- Data transformation
- External service integration

#### 3. Data Access Layer (Repository)
- Database operations
- JPA/Hibernate queries
- Data persistence

#### 4. Domain Layer (Model)
- Entity definitions
- Business entities
- Relationships

### Design Patterns Used

**1. Repository Pattern**
- Abstracts data access logic
- Provides collection-like interface for domain objects
- Implemented via Spring Data JPA

**2. DTO Pattern**
- Separates API models from domain models
- Controls data exposure
- Reduces payload size

**3. Service Layer Pattern**
- Encapsulates business logic
- Transaction boundaries
- Reusable business operations

**4. Dependency Injection**
- Spring IoC container
- Loose coupling
- Easy testing

**5. Builder Pattern**
- Complex object construction
- Fluent API for object creation

**6. Strategy Pattern**
- Payment processing strategies
- Different authentication providers

### Request Flow

```
HTTP Request
    ↓
Controller (Validation)
    ↓
Service Layer (Business Logic)
    ↓
Repository (Data Access)
    ↓
Database
    ↓
Repository (Result)
    ↓
Service (Processing)
    ↓
Controller (Response Mapping)
    ↓
HTTP Response
```

---

## Database Design

### Database Schema

#### Users Table
```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(50) DEFAULT 'CUSTOMER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email),
    INDEX idx_role (role)
);
```

#### Products Table
```sql
CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    image_url VARCHAR(500),
    fabric VARCHAR(255),
    fit VARCHAR(255),
    care_instructions TEXT,
    delivery_info VARCHAR(255),
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    INDEX idx_category (category),
    INDEX idx_price (price),
    INDEX idx_stock (stock_quantity)
);
```

#### Cart Table
```sql
CREATE TABLE carts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_cart (user_id)
);
```

#### Cart Items Table
```sql
CREATE TABLE cart_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cart_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE KEY unique_cart_product (cart_id, product_id)
);
```

#### Orders Table
```sql
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id BIGINT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    payment_status VARCHAR(50) DEFAULT 'PENDING',
    payment_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_order_number (order_number)
);
```

#### Order Items Table
```sql
CREATE TABLE order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price_at_order DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### Shipping Address Table
```sql
CREATE TABLE shipping_addresses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    country VARCHAR(100) DEFAULT 'India',
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);
```

#### Bookings Table
```sql
CREATE TABLE bookings (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    service_type VARCHAR(100) NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time TIME NOT NULL,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_user_id (user_id),
    INDEX idx_date (preferred_date),
    INDEX idx_status (status)
);
```

#### Testimonials Table
```sql
CREATE TABLE testimonials (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    name VARCHAR(255) NOT NULL,
    quote TEXT NOT NULL,
    avatar_url VARCHAR(500),
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_approved (is_approved)
);
```

### Entity Relationships

```
User (1) ----< (1) Cart
User (1) ----< (N) Orders
User (1) ----< (N) Bookings
User (1) ----< (N) Testimonials

Cart (1) ----< (N) CartItems
CartItem (N) ----> (1) Product

Order (1) ----< (N) OrderItems
Order (1) ----< (1) ShippingAddress
OrderItem (N) ----> (1) Product
```

---

## API Endpoints

### Base URL
```
Development: http://localhost:8080/api/v1
Production: https://api.ashaboutique.com/api/v1
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "+91 9876543210"
}

Response: 201 Created
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "CUSTOMER",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

Request:
{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "CUSTOMER"
  }
}
```

#### Logout
```http
POST /auth/logout
Authorization: Bearer {token}

Response: 200 OK
{
  "message": "Logged out successfully"
}
```

#### Refresh Token
```http
POST /auth/refresh
Authorization: Bearer {token}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Product Endpoints

#### Get All Products
```http
GET /products
Query Params:
  - page: int (default: 0)
  - size: int (default: 10)
  - category: string (optional)
  - sortBy: string (price, name, createdAt)
  - sortOrder: string (asc, desc)

Response: 200 OK
{
  "content": [
    {
      "id": 1,
      "name": "Pleat-Front Blouse",
      "price": 2400.00,
      "category": "Tops",
      "imageUrl": "/images/product1.jpg",
      "stock": 20
    }
  ],
  "page": 0,
  "size": 10,
  "totalElements": 8,
  "totalPages": 1
}
```

#### Get Product by ID
```http
GET /products/{id}

Response: 200 OK
{
  "id": 1,
  "name": "Pleat-Front Blouse",
  "description": "A refined blouse with soft pleat detailing...",
  "price": 2400.00,
  "category": "Tops",
  "imageUrl": "/images/product1.jpg",
  "fabric": "Cotton-silk blend",
  "fit": "Relaxed shoulder with a neat waist",
  "careInstructions": "Gentle hand wash or dry clean",
  "deliveryInfo": "Ready to ship in 2-3 days",
  "stock": 20,
  "createdAt": "2024-01-01T00:00:00",
  "updatedAt": "2024-01-01T00:00:00"
}
```

#### Get Products by Category
```http
GET /products/category/{category}

Response: 200 OK
{
  "content": [...],
  "page": 0,
  "size": 10,
  "totalElements": 5,
  "totalPages": 1
}
```

#### Search Products
```http
GET /products/search
Query: q (search term)

Response: 200 OK
{
  "content": [...],
  "totalElements": 3
}
```

#### Create Product (Admin Only)
```http
POST /products
Authorization: Bearer {admin_token}
Content-Type: application/json

Request:
{
  "name": "New Product",
  "description": "Product description",
  "price": 2999.00,
  "category": "Dresses",
  "imageUrl": "/images/new-product.jpg",
  "fabric": "Cotton",
  "fit": "Regular",
  "careInstructions": "Machine wash",
  "deliveryInfo": "Ready to ship",
  "stock": 50
}

Response: 201 Created
{
  "id": 9,
  "name": "New Product",
  ...
}
```

#### Update Product (Admin Only)
```http
PUT /products/{id}
Authorization: Bearer {admin_token}
Content-Type: application/json

Request: { same as create }

Response: 200 OK
{
  "id": 9,
  "name": "Updated Product",
  ...
}
```

#### Delete Product (Admin Only)
```http
DELETE /products/{id}
Authorization: Bearer {admin_token}

Response: 204 No Content
```

### Cart Endpoints

#### Get User Cart
```http
GET /cart
Authorization: Bearer {token}

Response: 200 OK
{
  "id": 1,
  "userId": 1,
  "items": [
    {
      "id": 1,
      "productId": 1,
      "productName": "Pleat-Front Blouse",
      "price": 2400.00,
      "quantity": 2,
      "imageUrl": "/images/product1.jpg"
    }
  ],
  "totalItems": 2,
  "totalAmount": 4800.00
}
```

#### Add to Cart
```http
POST /cart/items
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  "productId": 1,
  "quantity": 2
}

Response: 201 Created
{
  "id": 1,
  "productId": 1,
  "quantity": 2
}
```

#### Update Cart Item
```http
PUT /cart/items/{itemId}
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  "quantity": 3
}

Response: 200 OK
{
  "id": 1,
  "productId": 1,
  "quantity": 3
}
```

#### Remove from Cart
```http
DELETE /cart/items/{itemId}
Authorization: Bearer {token}

Response: 204 No Content
```

#### Clear Cart
```http
DELETE /cart
Authorization: Bearer {token}

Response: 204 No Content
```

### Order Endpoints

#### Create Order
```http
POST /orders
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  "shippingAddress": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 9876543210",
    "address": "123 Main Street",
    "city": "Mumbai",
    "state": "Maharashtra",
    "zip": "400001",
    "country": "India"
  },
  "paymentMethod": "STRIPE"
}

Response: 201 Created
{
  "id": 1,
  "orderNumber": "ORD-1704067200000",
  "userId": 1,
  "totalAmount": 4800.00,
  "status": "PENDING",
  "paymentStatus": "PENDING",
  "items": [...],
  "shippingAddress": {...},
  "createdAt": "2024-01-01T00:00:00"
}
```

#### Get User Orders
```http
GET /orders
Authorization: Bearer {token}
Query Params:
  - page: int
  - size: int
  - status: string

Response: 200 OK
{
  "content": [...],
  "page": 0,
  "size": 10,
  "totalElements": 5
}
```

#### Get Order by ID
```http
GET /orders/{orderId}
Authorization: Bearer {token}

Response: 200 OK
{
  "id": 1,
  "orderNumber": "ORD-1704067200000",
  "userId": 1,
  "totalAmount": 4800.00,
  "status": "CONFIRMED",
  "paymentStatus": "PAID",
  "items": [...],
  "shippingAddress": {...},
  "createdAt": "2024-01-01T00:00:00",
  "updatedAt": "2024-01-01T01:00:00"
}
```

#### Update Order Status (Admin Only)
```http
PATCH /orders/{orderId}/status
Authorization: Bearer {admin_token}
Content-Type: application/json

Request:
{
  "status": "SHIPPED"
}

Response: 200 OK
{
  "id": 1,
  "status": "SHIPPED",
  ...
}
```

#### Cancel Order
```http
POST /orders/{orderId}/cancel
Authorization: Bearer {token}

Response: 200 OK
{
  "message": "Order cancelled successfully"
}
```

### Booking Endpoints

#### Create Booking
```http
POST /bookings
Authorization: Bearer {token} (optional)
Content-Type: application/json

Request:
{
  "name": "John Doe",
  "phone": "+91 9876543210",
  "email": "john@example.com",
  "serviceType": "Tailoring",
  "preferredDate": "2024-02-01",
  "preferredTime": "14:00",
  "notes": "Need alterations for wedding outfit"
}

Response: 201 Created
{
  "id": 1,
  "name": "John Doe",
  "phone": "+91 9876543210",
  "email": "john@example.com",
  "serviceType": "Tailoring",
  "preferredDate": "2024-02-01",
  "preferredTime": "14:00",
  "notes": "Need alterations for wedding outfit",
  "status": "PENDING",
  "createdAt": "2024-01-01T00:00:00"
}
```

#### Get User Bookings
```http
GET /bookings
Authorization: Bearer {token}

Response: 200 OK
{
  "content": [...],
  "totalElements": 3
}
```

#### Get Booking by ID
```http
GET /bookings/{id}
Authorization: Bearer {token}

Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "serviceType": "Tailoring",
  "preferredDate": "2024-02-01",
  "preferredTime": "14:00",
  "status": "CONFIRMED",
  ...
}
```

#### Update Booking Status (Admin Only)
```http
PATCH /bookings/{id}/status
Authorization: Bearer {admin_token}
Content-Type: application/json

Request:
{
  "status": "CONFIRMED"
}

Response: 200 OK
{
  "id": 1,
  "status": "CONFIRMED",
  ...
}
```

#### Cancel Booking
```http
POST /bookings/{id}/cancel
Authorization: Bearer {token}

Response: 200 OK
{
  "message": "Booking cancelled successfully"
}
```

### User Endpoints

#### Get Current User
```http
GET /users/me
Authorization: Bearer {token}

Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "role": "CUSTOMER",
  "createdAt": "2024-01-01T00:00:00"
}
```

#### Update User Profile
```http
PUT /users/me
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  "name": "John Updated",
  "phone": "+91 9876543211"
}

Response: 200 OK
{
  "id": 1,
  "name": "John Updated",
  "email": "john@example.com",
  "phone": "+91 9876543211",
  ...
}
```

#### Change Password
```http
POST /users/me/change-password
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  "currentPassword": "oldPassword",
  "newPassword": "newPassword123"
}

Response: 200 OK
{
  "message": "Password changed successfully"
}
```

### Testimonial Endpoints

#### Get All Testimonials
```http
GET /testimonials

Response: 200 OK
{
  "content": [
    {
      "id": 1,
      "name": "Priya D.",
      "quote": "They altered my mother's saree blouse in a day...",
      "avatarUrl": "/images/avatar1.jpg"
    }
  ]
}
```

#### Submit Testimonial
```http
POST /testimonials
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  "quote": "Great service!",
  "rating": 5
}

Response: 201 Created
{
  "id": 4,
  "name": "John Doe",
  "quote": "Great service!",
  "rating": 5,
  "status": "PENDING"
}
```

#### Approve Testimonial (Admin Only)
```http
PATCH /testimonials/{id}/approve
Authorization: Bearer {admin_token}

Response: 200 OK
{
  "id": 4,
  "status": "APPROVED"
}
```

---

## Authentication & Authorization

### Authentication Flow

#### 1. User Registration
```
Client → POST /auth/register
  → Validate input
  → Check if email exists
  → Hash password (BCrypt)
  → Create user in database
  → Generate JWT token
  → Return user + token
```

#### 2. User Login
```
Client → POST /auth/login
  → Validate input
  → Find user by email
  → Verify password (BCrypt)
  → Generate JWT token
  → Update last login
  → Return user + token
```

#### 3. JWT Token Structure
```json
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user@email.com",
    "userId": 1,
    "role": "CUSTOMER",
    "iat": 1704067200,
    "exp": 1704153600
  },
  "signature": "..."
}
```

### Authorization

#### Role-Based Access Control (RBAC)

**Roles:**
- `CUSTOMER` - Regular users
- `ADMIN` - Administrators
- `STAFF` - Staff members

**Permissions:**

| Endpoint | Customer | Admin | Staff |
|----------|----------|-------|-------|
| POST /auth/register | ✅ | ✅ | ✅ |
| POST /auth/login | ✅ | ✅ | ✅ |
| GET /products | ✅ | ✅ | ✅ |
| POST /products | ❌ | ✅ | ✅ |
| PUT /products | ❌ | ✅ | ✅ |
| DELETE /products | ❌ | ✅ | ❌ |
| GET /cart | ✅ | ✅ | ✅ |
| POST /cart/items | ✅ | ✅ | ✅ |
| GET /orders | ✅ (own) | ✅ (all) | ✅ (all) |
| PATCH /orders/{id}/status | ❌ | ✅ | ✅ |
| GET /bookings | ✅ (own) | ✅ (all) | ✅ (all) |
| PATCH /bookings/{id}/status | ❌ | ✅ | ✅ |

### Security Configuration

```java
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/products/**").permitAll()
                .requestMatchers("/api/v1/testimonials/**").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "PATCH"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```

---

## Data Models

### User Entity
```java
@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String name;
    
    private String phone;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.CUSTOMER;
    
    @Column(nullable = false)
    private Boolean isActive = true;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;
    
    private LocalDateTime lastLogin;
    
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Cart cart;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Booking> bookings;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Testimonial> testimonials;
}
```

### Product Entity
```java
@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;
    
    private String imageUrl;
    
    private String fabric;
    
    private String fit;
    
    @Column(name = "care_instructions", columnDefinition = "TEXT")
    private String careInstructions;
    
    @Column(name = "delivery_info")
    private String deliveryInfo;
    
    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity;
    
    @Column(nullable = false)
    private Boolean isActive = true;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;
}
```

### Cart Entity
```java
@Entity
@Table(name = "carts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cart {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;
    
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> items = new ArrayList<>();
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;
    
    public void addItem(CartItem item) {
        items.add(item);
        item.setCart(this);
    }
    
    public void removeItem(CartItem item) {
        items.remove(item);
        item.setCart(null);
    }
    
    public BigDecimal getTotalAmount() {
        return items.stream()
            .map(item -> item.getProduct().getPrice()
                .multiply(BigDecimal.valueOf(item.getQuantity())))
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
```

### Cart Item Entity
```java
@Entity
@Table(name = "cart_items", 
       uniqueConstraints = @UniqueConstraint(columnNames = {"cart_id", "product_id"}))
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
    
    @Column(nullable = false)
    private Integer quantity = 1;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
```

### Order Entity
```java
@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "order_number", unique = true, nullable = false)
    private String orderNumber;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status = OrderStatus.PENDING;
    
    @Column(name = "payment_status")
    private String paymentStatus = "PENDING";
    
    @Column(name = "payment_id")
    private String paymentId;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;
    
    private LocalDateTime shippedAt;
    
    private LocalDateTime deliveredAt;
    
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();
    
    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private ShippingAddress shippingAddress;
    
    @PrePersist
    protected void onCreate() {
        orderNumber = "ORD-" + System.currentTimeMillis();
    }
}
```

### Order Item Entity
```java
@Entity
@Table(name = "order_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
    
    @Column(name = "product_name", nullable = false)
    private String productName;
    
    @Column(nullable = false)
    private Integer quantity;
    
    @Column(name = "price_at_order", nullable = false, precision = 10, scale = 2)
    private BigDecimal priceAtOrder;
    
    @PrePersist
    protected void onCreate() {
        if (product != null) {
            productName = product.getName();
            priceAtOrder = product.getPrice();
        }
    }
}
```

### Booking Entity
```java
@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String phone;
    
    @Column(nullable = false)
    private String email;
    
    @Column(name = "service_type", nullable = false)
    private String serviceType;
    
    @Column(name = "preferred_date", nullable = false)
    private LocalDate preferredDate;
    
    @Column(name = "preferred_time", nullable = false)
    private LocalTime preferredTime;
    
    @Column(columnDefinition = "TEXT")
    private String notes;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BookingStatus status = BookingStatus.PENDING;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(nullable = false)
    private LocalDateTime updatedAt;
}
```

### Testimonial Entity
```java
@Entity
@Table(name = "testimonials")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Testimonial {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String quote;
    
    @Column(name = "avatar_url")
    private String avatarUrl;
    
    private Integer rating;
    
    @Column(nullable = false)
    private Boolean isApproved = false;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
```

### Enums

```java
public enum Role {
    CUSTOMER,
    ADMIN,
    STAFF
}

public enum OrderStatus {
    PENDING,
    CONFIRMED,
    PROCESSING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
    REFUNDED
}

public enum BookingStatus {
    PENDING,
    CONFIRMED,
    COMPLETED,
    CANCELLED,
    NO_SHOW
}

public enum Category {
    TOPS,
    DRESSES,
    TAILORING,
    ACCESSORIES
}
```

---

## Service Layer

### Service Interface Pattern

```java
public interface ProductService {
    ProductResponse createProduct(ProductRequest request);
    ProductResponse updateProduct(Long id, ProductRequest request);
    ProductResponse getProductById(Long id);
    Page<ProductResponse> getAllProducts(Pageable pageable);
    Page<ProductResponse> getProductsByCategory(Category category, Pageable pageable);
    Page<ProductResponse> searchProducts(String query, Pageable pageable);
    void deleteProduct(Long id);
    void updateStock(Long productId, Integer quantity);
}
```

### Service Implementation Example

```java
@Service
@RequiredArgsConstructor
@Transactional
public class ProductServiceImpl implements ProductService {
    
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;
    
    @Override
    public ProductResponse createProduct(ProductRequest request) {
        Product product = productMapper.toEntity(request);
        product = productRepository.save(product);
        return productMapper.toResponse(product);
    }
    
    @Override
    @Transactional(readOnly = true)
    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
        return productMapper.toResponse(product);
    }
    
    @Override
    @Transactional(readOnly = true)
    public Page<ProductResponse> getAllProducts(Pageable pageable) {
        Page<Product> products = productRepository.findByIsActiveTrue(pageable);
        return products.map(productMapper::toResponse);
    }
    
    @Override
    public void updateStock(Long productId, Integer quantity) {
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        
        if (product.getStockQuantity() < quantity) {
            throw new BadRequestException("Insufficient stock");
        }
        
        product.setStockQuantity(product.getStockQuantity() - quantity);
        productRepository.save(product);
    }
}
```

---

## Repository Layer

### Repository Interfaces

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    List<User> findByRole(RoleEnum role);
}

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByIsActiveTrue(Pageable pageable);
    Page<Product> findByCategory(Category category, Pageable pageable);
    Page<Product> findByNameContainingIgnoreCase(String name, Pageable pageable);
    List<Product> findByStockQuantityLessThan(Integer quantity);
}

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    Page<Order> findByUser(User user, Pageable pageable);
    Page<Order> findByStatus(OrderStatus status, Pageable pageable);
    Optional<Order> findByOrderNumber(String orderNumber);
}

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    Page<Booking> findByUser(User user, Pageable pageable);
    Page<Booking> findByPreferredDateBetween(LocalDate start, LocalDate end, Pageable pageable);
    Page<Booking> findByStatus(BookingStatus status, Pageable pageable);
}

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUser(User user);
}
```

---

## Exception Handling

### Custom Exceptions

```java
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }
}

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException(String message) {
        super(message);
    }
}
```

### Global Exception Handler

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFoundException(
            ResourceNotFoundException ex) {
        ErrorResponse error = ErrorResponse.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.NOT_FOUND.value())
            .error("Not Found")
            .message(ex.getMessage())
            .build();
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorResponse> handleBadRequestException(
            BadRequestException ex) {
        ErrorResponse error = ErrorResponse.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.BAD_REQUEST.value())
            .error("Bad Request")
            .message(ex.getMessage())
            .build();
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> 
            errors.put(error.getField(), error.getDefaultMessage())
        );
        
        ErrorResponse error = ErrorResponse.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.BAD_REQUEST.value())
            .error("Validation Failed")
            .message("Invalid input parameters")
            .validationErrors(errors)
            .build();
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse error = ErrorResponse.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
            .error("Internal Server Error")
            .message("An unexpected error occurred")
            .build();
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

---

## Validation

### Request Validation

```java
public class RegisterRequest {
    
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 100, message = "Password must be between 8 and 100 characters")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$",
             message = "Password must contain at least one digit, one lowercase, one uppercase, and one special character")
    private String password;
    
    @Pattern(regexp = "^[+]?[0-9]{10,15}$", message = "Invalid phone number")
    private String phone;
}
```

### Controller Validation

```java
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @Valid @RequestBody RegisterRequest request) {
        // Validation is automatic due to @Valid annotation
        return ResponseEntity.ok(authService.register(request));
    }
}
```

---

## Configuration

### Application Configuration (application.yml)

```yaml
spring:
  application:
    name: asha-boutique-backend
  
  profiles:
    active: dev
  
  datasource:
    url: jdbc:mysql://localhost:3306/asha_boutique
    username: ${DB_USERNAME:root}
    password: ${DB_PASSWORD:password}
    driver-class-name: com.mysql.cj.jdbc.Driver
  
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQLDialect
        format_sql: true
  
  flyway:
    enabled: true
    baseline-on-migrate: true
    locations: classpath:db/migration
  
  servlet:
    multipart:
      enabled: true
      max-file-size: 10MB
      max-request-size: 10MB
  
  mail:
    host: ${MAIL_HOST:smtp.gmail.com}
    port: ${MAIL_PORT:587}
    username: ${MAIL_USERNAME}
    password: ${MAIL_PASSWORD}
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true

server:
  port: 8080
  servlet:
    context-path: /api/v1

jwt:
  secret: ${JWT_SECRET:your-secret-key-minimum-256-bits}
  expiration: ${JWT_EXPIRATION:86400000} # 24 hours

springdoc:
  api-docs:
    path: /api-docs
  swagger-ui:
    path: /swagger-ui.html

logging:
  level:
    com.ashaboutique: DEBUG
    org.springframework.security: DEBUG
    org.hibernate.SQL: DEBUG
```

### Production Configuration (application-prod.yml)

```yaml
spring:
  datasource:
    url: ${DATABASE_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
  
  jpa:
    show-sql: false
    properties:
      hibernate:
        format_sql: false
  
  flyway:
    enabled: true

jwt:
  secret: ${JWT_SECRET}
  expiration: ${JWT_EXPIRATION}

logging:
  level:
    com.ashaboutique: INFO
    org.springframework.security: WARN
    org.hibernate.SQL: WARN
```

---

## Integration with Frontend

### CORS Configuration

**Frontend URL:** http://localhost:5173 (development)

**CORS Configuration:**
```java
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList(
        "http://localhost:5173",
        "https://ashaboutique.com"
    ));
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
    configuration.setAllowedHeaders(Arrays.asList("*"));
    configuration.setAllowCredentials(true);
    configuration.setMaxAge(3600L);
    
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
}
```

### API Integration Points

**Frontend → Backend Communication:**

1. **Authentication**
   - Login: POST /auth/login
   - Register: POST /auth/register
   - Store JWT token in localStorage/httpOnly cookie

2. **Products**
   - Fetch products: GET /products
   - Fetch single product: GET /products/{id}
   - Filter by category: GET /products/category/{category}

3. **Cart**
   - Get cart: GET /cart (with Authorization header)
   - Add to cart: POST /cart/items
   - Update quantity: PUT /cart/items/{itemId}
   - Remove item: DELETE /cart/items/{itemId}

4. **Orders**
   - Create order: POST /orders
   - Get user orders: GET /orders
   - Get order details: GET /orders/{id}

5. **Bookings**
   - Create booking: POST /bookings
   - Get user bookings: GET /bookings

### Request/Response Format

**Authorization Header:**
```
Authorization: Bearer {jwt_token}
```

**Error Response Format:**
```json
{
  "timestamp": "2024-01-01T00:00:00",
  "status": 404,
  "error": "Not Found",
  "message": "Product not found with id: 1",
  "path": "/api/v1/products/1"
}
```

**Validation Error Format:**
```json
{
  "timestamp": "2024-01-01T00:00:00",
  "status": 400,
  "error": "Validation Failed",
  "message": "Invalid input parameters",
  "validationErrors": {
    "email": "Invalid email format",
    "password": "Password must be at least 8 characters"
  }
}
```

---

## Security

### Security Best Practices

1. **Password Security**
   - BCrypt hashing with strength 10-12
   - Never store plain text passwords
   - Enforce strong password policies

2. **JWT Security**
   - Use HS256 or RS256 algorithm
   - Set appropriate expiration (24 hours)
   - Store in httpOnly cookies (preferred) or localStorage
   - Implement refresh token mechanism

3. **SQL Injection Prevention**
   - Use JPA/Hibernate parameterized queries
   - Never concatenate SQL strings
   - Use @Query with named parameters

4. **XSS Prevention**
   - Sanitize user input
   - Use proper encoding in responses
   - Set Content-Security-Policy headers

5. **CSRF Protection**
   - Disable for stateless APIs (JWT)
   - Enable if using session-based auth

6. **Rate Limiting**
   - Implement rate limiting on sensitive endpoints
   - Use Spring Boot Starter for Rate Limiting

7. **HTTPS**
   - Enforce HTTPS in production
   - Use HSTS headers

### Security Headers

```java
@Configuration
public class SecurityHeadersConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.headers(headers -> headers
            .contentSecurityPolicy(csp -> csp.policyDirectives("default-src 'self'"))
            .frameOptions(frame -> frame.sameOrigin())
            .httpStrictTransportSecurity(hsts -> hsts
                .includeSubDomains(true)
                .maxAgeInSeconds(31536000))
            .xssProtection(xss -> xss.enable())
        );
        return http.build();
    }
}
```

---

## Deployment

### Docker Configuration

**Dockerfile:**
```dockerfile
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

**docker-compose.yml:**
```yaml
version: '3.7'

services:
  mysql:
    image: mysql:8.0
    container_name: asha-mysql
    environment:
      MYSQL_DATABASE: asha_boutique
      MYSQL_ROOT_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql

  backend:
    build: .
    container_name: asha-backend
    ports:
      - "8080:8080"
    environment:
      SPRING_PROFILES_ACTIVE: prod
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/asha_boutique
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: password
      JWT_SECRET: your-production-secret-key
    depends_on:
      - mysql
    restart: unless-stopped

volumes:
  mysql-data:
```

### Deployment Options

**1. AWS (Elastic Beanstalk)**
- Easy deployment
- Auto-scaling
- RDS for database
- S3 for static assets

**2. AWS (EKS)**
- Kubernetes deployment
- More control
- Complex setup

**3. Azure (App Service)**
- PaaS deployment
- Azure SQL Database
- Easy scaling

**4. Google Cloud (Cloud Run)**
- Serverless containers
- Auto-scaling
- Cloud SQL

**5. DigitalOcean (App Platform)**
- Simple PaaS
- Managed databases
- Cost-effective

### Environment Variables

**Required for Production:**
```bash
SPRING_PROFILES_ACTIVE=prod
DATABASE_URL=mysql://user:pass@host:3306/dbname
DB_USERNAME=username
DB_PASSWORD=password
JWT_SECRET=your-256-bit-secret-key
JWT_EXPIRATION=86400000
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
```

---

## Testing

### Unit Testing

```java
@SpringBootTest
class ProductServiceTest {
    
    @Autowired
    private ProductService productService;
    
    @MockBean
    private ProductRepository productRepository;
    
    @Test
    void shouldCreateProduct() {
        // Given
        ProductRequest request = ProductRequest.builder()
            .name("Test Product")
            .price(new BigDecimal("100.00"))
            .category(Category.TOP)
            .build();
        
        Product product = Product.builder()
            .id(1L)
            .name("Test Product")
            .price(new BigDecimal("100.00"))
            .category(Category.TOP)
            .build();
        
        when(productRepository.save(any())).thenReturn(product);
        
        // When
        ProductResponse response = productService.createProduct(request);
        
        // Then
        assertThat(response.getName()).isEqualTo("Test Product");
        assertThat(response.getPrice()).isEqualTo(new BigDecimal("100.00"));
    }
}
```

### Integration Testing

```java
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class OrderControllerIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    @WithMockUser(username = "test@example.com")
    void shouldCreateOrder() throws Exception {
        OrderRequest request = OrderRequest.builder()
            .shippingAddress(shippingAddress)
            .paymentMethod("STRIPE")
            .build();
        
        mockMvc.perform(post("/orders")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.orderNumber").exists());
    }
}
```

### TestContainers

```java
@Testcontainers
@SpringBootTest
class UserRepositoryTest {
    
    @Container
    static MySQLContainer<?> mysql = new MySQLContainer<>("mysql:8.0");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mysql::getJdbcUrl);
        registry.add("spring.datasource.username", mysql::getUsername);
        registry.add("spring.datasource.password", mysql::getPassword);
    }
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void shouldSaveUser() {
        User user = User.builder()
            .email("test@example.com")
            .password("encodedPassword")
            .name("Test User")
            .build();
        
        User saved = userRepository.save(user);
        
        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getEmail()).isEqualTo("test@example.com");
    }
}
```

---

## Performance Optimization

### Caching Strategy

```java
@Configuration
@EnableCaching
public class CacheConfig {
    
    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        cacheManager.setCaffeine(Caffeine.newBuilder()
            .expireAfterWrite(10, TimeUnit.MINUTES)
            .maximumSize(1000));
        return cacheManager;
    }
}

@Service
public class ProductServiceImpl implements ProductService {
    
    @Cacheable(value = "products", key = "#id")
    public ProductResponse getProductById(Long id) {
        // Database query
    }
    
    @CacheEvict(value = "products", key = "#id")
    public ProductResponse updateProduct(Long id, ProductRequest request) {
        // Update and evict cache
    }
}
```

### Database Optimization

1. **Indexing**
   - Add indexes on frequently queried columns
   - Composite indexes for complex queries

2. **Query Optimization**
   - Use JPA projections for partial data
   - Avoid N+1 queries with @EntityGraph
   - Use pagination for large datasets

3. **Connection Pooling**
   - Configure HikariCP connection pool
   - Optimize pool size based on load

### Async Processing

```java
@Service
public class EmailService {
    
    @Async
    public void sendOrderConfirmationEmail(Order order) {
        // Send email asynchronously
    }
}
```

---

## Monitoring & Logging

### Actuator Endpoints

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: always
  metrics:
    export:
      prometheus:
        enabled: true
```

### Logging Configuration

```xml
<configuration>
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/asha-boutique.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/asha-boutique.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <root level="INFO">
        <appender-ref ref="FILE" />
        <appender-ref ref="CONSOLE" />
    </root>
</configuration>
```

---

## Future Enhancements

### Phase 1: Core Features
- Complete CRUD operations for all entities
- Implement payment gateway integration (Stripe)
- Email notifications for orders and bookings
- Image upload functionality (S3)

### Phase 2: Advanced Features
- Wishlist functionality
- Product reviews and ratings
- Advanced search with filters
- Recommendation engine
- Inventory management system

### Phase 3: Admin Features
- Admin dashboard
- Sales analytics
- Customer management
- Bulk product upload
- Report generation

### Phase 4: Integration
- SMS notifications (Twilio)
- Social media login (OAuth2)
- Multi-vendor support
- Affiliate system

### Phase 5: Performance & Scale
- Implement Redis caching
- Database read replicas
- CDN integration for images
- Load balancing
- Microservices architecture

### Phase 6: AI/ML
- Product recommendations
- Demand forecasting
- Chatbot for customer support
- Image recognition for products

---

## Conclusion

This backend design document provides a comprehensive blueprint for building a robust, scalable backend for the Asha Boutique Store using Java Spring Boot. The architecture follows industry best practices with:

- Clean layered architecture
- RESTful API design
- JWT-based authentication
- Comprehensive validation
- Exception handling
- Database design with proper relationships
- Integration ready for the React frontend

The backend is designed to be:
- **Secure**: Spring Security with JWT
- **Scalable**: Layered architecture with caching
- **Maintainable**: Clean code with proper separation of concerns
- **Testable**: Comprehensive testing strategy
- **Deployable**: Docker and cloud-ready

For implementation, start with the core entities and authentication, then progressively add features following the phased approach outlined in the Future Enhancements section.

---

**Document Version:** 1.0  
**Last Updated:** July 2026  
**Backend Framework:** Spring Boot 3.2.x  
**Java Version:** 17  
**Database:** MySQL 8.0+
