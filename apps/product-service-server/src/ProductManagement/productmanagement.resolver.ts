import * as graphql from "@nestjs/graphql";
import { ProductDto } from "../productManagement/ProductDto";
import { ProductManagementService } from "./productmanagement.service";

export class ProductManagementResolver {
  constructor(protected readonly service: ProductManagementService) {}

  @graphql.Query(() => [ProductDto])
  async GetProducts(
    @graphql.Args()
    args: string
  ): Promise<ProductDto[]> {
    return this.service.GetProducts(args);
  }
}
