import { InputType, Float, Field } from '@nestjs/graphql';
import { MaxLength, Min } from 'class-validator';

@InputType()
export class CreateInvoiceInput {
  @Field(() => String, { nullable: false })
  @MaxLength(3)
  serie: string;

  @Field(() => String, { nullable: false })
  number: string;

  @Field(() => Date, { nullable: false, defaultValue: new Date() })
  created: Date;

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  @Min(0)
  sub_total: number;

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  @Min(0)
  tax: number;

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  @Min(0)
  total: number;
}
