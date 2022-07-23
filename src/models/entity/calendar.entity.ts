import { ICalendarModel } from 'src/interface/models/calendar.model';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, ManyToOne, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity({ name: 'calendar' })
export class CalendarEntity extends BaseEntity implements ICalendarModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    date: string;

    @Column({ nullable: false })
    attendancetime: string;

    @Column({ nullable: false })
    reference: string;

    @Column({ nullable: false })
    status: number;

    @ManyToOne(() => EmployeeEntity, employeename => employeename.attendancechecks)
    employeename: EmployeeEntity;

    @Column()
    employeename_id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}