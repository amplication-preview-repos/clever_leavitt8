import { Injectable } from "@nestjs/common";
import { ProductDto } from "../productManagement/ProductDto";

@Injectable()
export class ProductManagementService {
  constructor() {}
  async GetProducts(args: string): Promise<ProductDto[]> {
    throw new Error("Not implemented");
  }
}
