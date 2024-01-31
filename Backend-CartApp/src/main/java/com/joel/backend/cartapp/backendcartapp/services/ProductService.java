package com.joel.backend.cartapp.backendcartapp.services;

import java.util.List;

import com.joel.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
