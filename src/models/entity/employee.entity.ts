import { IEmployeeModel } from 'src/interface/models/employee.model';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { CalendarEntity } from './calendar.entity';

@Entity({ name: 'employee' })
export class EmployeeEntity extends BaseEntity implements IEmployeeModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    lastname: string;

    @Column({ nullable: false})
    name: string;

    @Column({ nullable: false})
    company: string;

    @Column({ nullable: false})
    teamname: string;

    @Column({ nullable: false})
    position: string;

    @Column({ nullable: false})
    startdate: string;

    @Column({ nullable: false})
    birthday: string;

    @Column({ nullable: false})
    phone: string;

    @OneToMany(() => CalendarEntity, attendancecheck => attendancecheck.employeename)
    attendancechecks: CalendarEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}