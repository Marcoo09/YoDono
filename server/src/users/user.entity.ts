import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;
  //   @BeforeInsert()
  //   hashPassword() {
  //     this.password = crypto.createHmac('sha256', this.password).digest('hex');
  //   }
  @Column()
  password: string;

  @Column({ default: 'Other' })
  gender: string;

  @Column({ default: 'Person' })
  type: string;
}
