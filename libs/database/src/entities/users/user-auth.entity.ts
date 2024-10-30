import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAuthRoleEnum } from '../../types';
import { UserKakaoOauth } from '@libs/database/entities/users/user-kakao.oauth.entity';

@Entity()
export class UserAuth {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  password: string;

  @Column({
    type: 'enum',
    enum: UserAuthRoleEnum,
    default: UserAuthRoleEnum.USER,
  })
  role: UserAuthRoleEnum;

  @Column({ default: null, type: 'varchar', length: 255 })
  salt: string;

  @Column({ type: 'varchar', length: 255, default: null })
  access_token: string;

  @Column({ default: null, type: 'varchar', length: 255 })
  refresh_token: string;

  @OneToOne(() => UserKakaoOauth, {
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  kakaoOauth: UserKakaoOauth;
}
