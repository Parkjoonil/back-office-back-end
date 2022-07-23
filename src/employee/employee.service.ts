import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IEmployeeDTO } from 'src/interface/dtos/employee.dto';
import { EmployeeEntity } from 'src/models/entity/employee.entity';
import { Equal } from 'typeorm';

@Injectable()
export class EmployeeService {

    async getEmployees(): Promise<EmployeeEntity[]> {
        const employees = await EmployeeEntity.find({
            relations: ['attendancechecks']
        });

        return employees;
    }

    async getEmployee(id: number): Promise<EmployeeEntity> {
        const employee = await EmployeeEntity.findOne({where: {id}});

        return employee;
    }

    async getSortEmployees(teamname: string, company: string): Promise<EmployeeEntity[]> {
        const employees = await EmployeeEntity.find({
            where: {
                teamname: Equal(teamname),
                company: Equal(company)
            }
        });

        return employees;
    }

    async save(body: IEmployeeDTO.Request.CreateEmployee): Promise<EmployeeEntity> {
        const employee = new EmployeeEntity();
        employee.lastname = body.lastname;
        employee.name = body.name;
        employee.teamname = body.teamname;
        employee.company = body.company;
        employee.position = body.position;
        employee.startdate = body.startdate;
        employee.birthday = body.birthday;
        employee.phone = body.phone;
        employee.save();
        return employee;
    }

    async update(id: number, body: IEmployeeDTO.Request.CreateEmployee): Promise<EmployeeEntity> {
        const employee = await EmployeeEntity.findOne({where: {id}});
        employee.lastname = body.lastname;
        employee.name = body.name;
        employee.company = body.company;
        employee.teamname = body.teamname;
        employee.position = body.position;
        employee.startdate = body.startdate;
        employee.birthday = body.birthday;
        employee.phone = body.phone;
        employee.save();

        return employee;
    }

    async delete(id: number): Promise<EmployeeEntity> {
        const employee = await EmployeeEntity.findOne({
            where: {
                id
            }
        });
        employee.softRemove();

        return employee;
    }
}
