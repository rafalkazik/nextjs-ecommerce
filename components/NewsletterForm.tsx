import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from './FormInput';
import { CheckoutFormData } from './CheckoutForm';

// export interface NewsletterFormType {
//     email: string;
//   }

export const NewsletterForm = () => {
  const schema = yup
    .object({
      email: yup.string().email().required('This field is required.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    fetch('http://localhost:3001/api/hello/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email }),
    });
  });

  return (
    <form className='grid grid-cols-6 gap-4' onSubmit={onSubmit}>
      <div className='col-span-6'>
        <FormInput
          fieldName='email'
          type='text'
          register={register}
          errors={errors}
          isRequired={true}
          maximLength={20}
          minimLength={2}
        />
      </div>
      <div className='col-span-6'>
        <button
          type='submit'
          className='block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg'
        >
          Add
        </button>
      </div>
    </form>
  );
};
