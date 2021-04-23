package com.example.starbucksspringapi;

class CardNotFoundException extends RuntimeException {

    CardNotFoundException(Long id) {
    super("Could not find card " + id);
  }
}