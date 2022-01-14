import { IShareidModel } from 'src/interface/models/shareid.model';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'shareid' })
export class ShareidEntity extends BaseEntity implements IShareidModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    head: string;

    @Column({ nullable: false })
    object: string;

    @Column({ nullable: false })
    company: string;

    @Column({ nullable: false })
    userid: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    reference: string;

    @Column({ nullable: false })
    fax: string;

    @Column({ nullable: false })
    url: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}