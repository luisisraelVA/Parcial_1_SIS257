import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductoDto {
  @IsDefined({ message: 'El campo id de la categoria debe estar definido' })
  @IsInt({ message: 'El campo id de la categoria debe ser numérico' })
  idCategoria: number;

  @IsDefined({ message: 'El campo código debe estar definido' })
  @IsInt({ message: 'El campo código debe ser numérico' })
  codigo: string;

  @IsString({ message: 'El campo descripción debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El campo descripción no debe estar vacío' })
  @MaxLength(100, {message: 'El campo descripción no debe tener más de 100 caracteres'})
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  descripcion: string;

  @IsDefined({ message: 'El campo fecha debe estar definido' })
  @IsDateString({}, { message: 'El campo fecha de vencimiento debe ser una fecha valida' })
  fechaVencimiento: Date;
}
