import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ProductDtoObject")
class ProductDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    price!: number;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    createdAt?: Date;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    updatedAt?: Date;
}

export { ProductDto as ProductDto };