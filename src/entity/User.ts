import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  confirmed: boolean;

  @Column("text")
  firstName: string;

  @Column("text")
  lastName: string;

  @Column()
  age: number;
}
