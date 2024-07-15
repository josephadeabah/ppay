# README

This README would normally document whatever steps are necessary to get the
application up and running.

### 1. **Create user endpoints**
Method: POST
URL: http://localhost:3000/api/v1/users
Headers: Content-Type: application/json
Body (raw JSON):
{
  "user": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "password_confirmation": "password123"
  }
}

### 1. **Create login endpoints**
Method: POST
URL: http://localhost:3000/api/v1/login
Headers: Content-Type: application/json
Body (raw JSON):
{
    "email": "john.doe@example.com",
    "password": "password123",
}

### 1. **Create wages endpoints**
Method: POST/GET
URL: http://localhost:3000/api/v1/wages
Headers: Content-Type: application/json, Authorization: Bearer <your_token>
Body (raw JSON):
{
  "user": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "password_confirmation": "password123"
  }
}

### 1. **Create negotiations endpoints**
Method: POST/GET
URL: http://localhost:3000/api/v1/negotiations
Headers: Content-Type: application/json, Authorization: Bearer <your_token>
Body (raw JSON):
{
  "user": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "password_confirmation": "password123"
  }
}

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
rails generate model User first_name:string last_name:string email:string password_digest:string role:string
rails generate model Wage user:references job_title:string location:string wage:decimal
rails generate model Negotiation user:references details:text
rails generate model Forum name:string
rails generate model Post forum:references user:references content:text
rails generate model Negotiator user:references details:text
rails generate model LaborOrganization name:string details:text
rails generate model Admin user:references details:text
rails generate model Employer name:string details:text

rails generate controller Api::V1::Users
rails generate controller Api::V1::Wages
rails generate controller Api::V1::Negotiations
rails generate controller Api::V1::Forums
rails generate controller Api::V1::Posts
rails generate controller Api::V1::Negotiators
rails generate controller Api::V1::LaborOrganizations
rails generate controller Api::V1::Admins
rails generate controller Api::V1::Employers
rails generate controller Api::V1::PayEquityCalculator
rails generate controller Api::V1::DataVisualization


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* Backend Development guide: https://chatgpt.com/share/bb8a82d4-f805-4e15-96af-25ee7d53c5f3 / https://chatgpt.com/share/bd8ae83b-d19a-4b81-99c9-201b0809551e

* ...
