import { FieldErrorsImpl, FieldPath, UseFormRegister } from 'react-hook-form';
import { CheckoutFormData } from './CheckoutForm';

interface FormInputTypes {
  fieldName: FieldPath<CheckoutFormData>;
  type: string;
  register: UseFormRegister<CheckoutFormData>;
  errors: Partial<FieldErrorsImpl<CheckoutFormData>>;
  isRequired: boolean;
  maximLength: number;
  minimLength: number;
}

export const FormInput = ({
  fieldName,
  type,
  register,
  errors,
  isRequired,
  maximLength,
  minimLength,
}: FormInputTypes) => {
  return (
    <>
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
    </>
  );
};
