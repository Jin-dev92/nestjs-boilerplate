import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserKakaoOauth {
  @PrimaryColumn({ type: 'int', unique: true })
  kakaoId: number;

  @Column({ type: 'varchar', length: 255 })
  id_token: string;

  @Column({ type: 'varchar', length: 255 })
  access_token: string;

  @Column({ type: 'varchar', length: 255 })
  refresh_token: string;

  @Column('timestamptz')
  expires_on: Date;

  @Column('timestamptz')
  refresh_expires_on: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamptz', default: null, nullable: true })
  delete_at: Date;
}
