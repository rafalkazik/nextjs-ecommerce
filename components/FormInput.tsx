import { FieldErrorsImpl, FieldPath, UseFormRegister } from 'react-hook-form';
import { FormsData } from './CheckoutForm';

interface FormInputTypes {
  fieldName: FieldPath<FormsData>;
  label: string;
  type: string;
  register: UseFormRegister<FormsData>;
  errors: Partial<FieldErrorsImpl<FormsData>>;
  isRequired: boolean;
  maximLength: number;
  minimLength: number;
}

export const FormInput = ({
  fieldName,
  label,
  type,
  register,
  errors,
  isRequired,
  maximLength,
  minimLength,
}: FormInputTypes) => {
  return (
    <label
      htmlFor={fieldName}
      className='block text-xs font-medium text-gray-700'
    >
      {label}
      <input
        type={type}
        className='w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm'
        {...register(fieldName, {
          required: {
            value: isRequired,
            message: 'This is required',
          },
          maxLength: {
            value: maximLength,
            message: `Value must be maximum ${maximLength}`,
          },
          minLength: {
            value: minimLength,
            message: `Value must be minimum ${minimLength}`,
          },
        })}
      />
      {errors[fieldName] && (
        <span className='text-red-500 text-sm'>
          {errors[fieldName]?.message}
        </span>
      )}
    </label>
  );
};
