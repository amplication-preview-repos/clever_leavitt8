import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductManagementService } from "./productmanagement.service";
import { ProductDto } from "../productManagement/ProductDto";

@swagger.ApiTags("productManagements")
@common.Controller("productManagements")
export class ProductManagementController {
  constructor(protected readonly service: ProductManagementService) {}

  @common.Get("/products")
  @swagger.ApiOkResponse({
    type: ProductDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetProducts(
    @common.Body()
    body: string
  ): Promise<ProductDto[]> {
        return this.service.GetProducts(body);
      }
}
