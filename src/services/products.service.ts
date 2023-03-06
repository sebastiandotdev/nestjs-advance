import { Injectable } from '@nestjs/common';
import { Product } from './productsDto/products.dto';

@Injectable()
export class ProductsService {
  private amount = 1;
  private products: Array<Product> = [
    {
      id: 1,
      name: 'lapto',
      description: 'by',
      price: 3000,
      stock: 10,
      image: 'https://image.png',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(payload: any) {
    this.amount += 1;
    const productNew = {
      id: this.amount,
      ...payload,
    };
    this.products.push(productNew);
    return productNew;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((product) => product.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const dlProduct = this.products.every((product) => product.id === id);
    return dlProduct;
  }
}
