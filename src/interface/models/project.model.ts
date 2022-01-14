export enum Status {
    'WAIT' = '대기',
    'ING' = '중',
    'COMPLETE' = '완료',
}

export interface IProjectModel {
    id: number;
    name: string;
    status: Status;
    startAt?: Date;
    endAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }
  