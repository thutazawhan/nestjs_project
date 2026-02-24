import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'studentsInfos',
  timestamps: false,
})
export class StudentInfo extends Model<StudentInfo> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id_: number;

  @Column({ field: 'first_name', type: DataType.STRING(100) })
  first_name: string;

  @Column({ field: 'last_name', type: DataType.STRING(100) })
  last_name: string;

  @Column({ type: DataType.INTEGER })
  age: number;

  @Column({ type: DataType.STRING(150) })
  hobby: string;
}