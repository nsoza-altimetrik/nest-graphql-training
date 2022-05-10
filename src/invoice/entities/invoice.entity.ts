import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { MaxLength, Min } from 'class-validator';

@Entity()
@ObjectType()
export class Invoice {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ type: 'varchar', length: 3 })
  @Field(() => String, { nullable: false })
  @MaxLength(3)
  serie: string;

  @Column({ type: 'varchar', length: 9 })
  @Field(() => String, { nullable: false })
  number: string;

  @Column({ type: 'timestamp' })
  @Field(() => Date, { nullable: false })
  created: Date;

  @Column({ type: 'numeric' })
  @Field(() => Float, { nullable: false })
  @Min(0)
  sub_total: number;

  @Column({ type: 'numeric' })
  @Field(() => Float, { nullable: false })
  @Min(0)
  tax: number;

  @Column({ type: 'numeric' })
  @Field(() => Float, { nullable: false })
  @Min(0)
  total: number;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated: Date;
}
