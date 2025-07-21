# eBay test automation for Best seller feature

## Overview

This project automates the shopping experience on eBay with a focus on purchasing a wallet. It verifies that after searching for the main product (wallet), the product detail page displays a list of related products that are best sellers.

## Scenario Description

- **Main product:** Wallet (searched on eBay)
- **Related products:** Up to six best seller products
- **Filter criteria for related products:**
  - Same category as the main product
  - Similar price range as the main product

The automation ensures the related best seller products section is correctly populated with relevant items that match the above criteria.

## Features Tested

- Searching for the main product (wallet)
- Validation of main product page elements
- Display and correctness of related best seller products
- Filtering related products by category and price range
- Limit to six related best seller products

## How to Run the Tests

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

