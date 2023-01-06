import { useForm } from 'react-hook-form';
import { FormInput } from './FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: string;
  city: string;
  province: string;
  postalCode: string;
}

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('This field is required.')
      .min(2, 'This value is too short.')
      .max(25, 'This value is too long.'),
    lastName: yup
      .string()
      .required('This field is required.')
      .min(2, 'This value is too short.')
      .max(25, 'This value is too long.'),
    email: yup.string().email().required('This field is required.'),
    phone: yup
      .string()
      .required('This field is required.')
      .matches(/^\d{6,15}$/, 'Type only numbers.'),
    adress: yup
      .string()
      .required('This field is required.')
      .min(2, 'This value is too short.')
      .max(30, 'This value is too long.'),
    city: yup
      .string()
      .required('This field is required.')
      .min(2, 'This value is too short.')
      .max(25, 'This value is too long.'),
    province: yup
      .string()
      .required('This field is required.')
      .min(2, 'This value is too short.')
      .max(25, 'This value is too long.'),
    postalCode: yup
      .string()
      .required('This field is required.')
      .matches(/^\d{2}-\d{3}$/, 'Postal code is wrong!'),
  })
  .required();

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section>
      <h1 className='sr-only'>Checkout</h1>
      <div className='grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2'>
        <div className='py-12 md:py-24'>
          <div className='max-w-lg px-4 mx-auto lg:px-8'>
            <form className='grid grid-cols-6 gap-4' onSubmit={onSubmit}>
              <div className='col-span-3'>
                <label
                  htmlFor='firstName'
                  className='block text-xs font-medium text-gray-700'
                >
                  First Name
                </label>
                <FormInput
                  fieldName='firstName'
                  type='text'
                  register={register}
                  errors={errors}
                  isRequired={true}
                  maximLength={20}
                  minimLength={2}
                />
              </div>

              <div className='col-span-3'>
                <label
                  htmlFor='lastName'
                  className='block text-xs font-medium text-gray-700'
                >
                  Last Name
                </label>

                <FormInput
                  fieldName='lastName'
                  type='text'
                  register={register}
                  errors={errors}
                  isRequired={true}
                  maximLength={20}
                  minimLength={2}
                />
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='email'
                  className='block text-xs font-medium text-gray-700'
                >
                  Email
                </label>

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
                <label
                  htmlFor='phone'
                  className='block text-xs font-medium text-gray-700'
                >
                  Phone
                </label>

                <FormInput
                  fieldName='phone'
                  type='text'
                  register={register}
                  errors={errors}
                  isRequired={true}
                  maximLength={12}
                  minimLength={6}
                />
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='adress'
                  className='block text-xs font-medium text-gray-700'
                >
                  Apartment, suite, etc.
                </label>

                <FormInput
                  fieldName='adress'
                  type='text'
                  register={register}
                  errors={errors}
                  isRequired={true}
                  maximLength={20}
                  minimLength={2}
                />
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='city'
                  className='block text-xs font-medium text-gray-700'
                >
                  City
                </label>

                <FormInput
                  fieldName='city'
                  type='text'
                  register={register}
                  errors={errors}
                  isRequired={true}
                  maximLength={20}
                  minimLength={2}
                />
              </div>
              <div className='col-span-3'>
                <label
                  htmlFor='province'
                  className='block text-xs font-medium text-gray-700'
                >
                  State / Province
                </label>

                <FormInput
                  fieldName='province'
                  type='text'
                  register={register}
                  errors={errors}
                  isRequired={true}
                  maximLength={20}
                  minimLength={2}
                />
              </div>
              <div className='col-span-3'>
                <label
                  htmlFor='postalCode'
                  className='block text-xs font-medium text-gray-700'
                >
                  Postal code
                </label>

                <FormInput
                  fieldName='postalCode'
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
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='py-12 bg-gray-50 md:py-24'>
          <div className='max-w-lg px-4 mx-auto space-y-8 lg:px-8'>
            <div>
              <p className='text-2xl font-medium tracking-tight text-gray-900'>
                $99.99
              </p>

              <p className='mt-1 text-sm text-gray-600'>For the purchase of</p>
            </div>

            <div>
              <div className='flow-root'>
                <ul className='-my-4 divide-y divide-gray-100'>
                  <li className='flex items-center py-4'>
                    <img
                      src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
                      alt=''
                      className='object-cover w-16 h-16 rounded'
                    />

                    <div className='ml-4'>
                      <h3 className='text-sm text-gray-900'>
                        Basic Tee 6-Pack
                      </h3>

                      <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                        <div>
                          <dt className='inline'>Size:</dt>
                          <dd className='inline'>XXS</dd>
                        </div>

                        <div>
                          <dt className='inline'>Color:</dt>
                          <dd className='inline'>White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li className='flex items-center py-4'>
                    <img
                      src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
                      alt=''
                      className='object-cover w-16 h-16 rounded'
                    />

                    <div className='ml-4'>
                      <h3 className='text-sm text-gray-900'>
                        Basic Tee 6-Pack
                      </h3>

                      <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                        <div>
                          <dt className='inline'>Size:</dt>
                          <dd className='inline'>XXS</dd>
                        </div>

                        <div>
                          <dt className='inline'>Color:</dt>
                          <dd className='inline'>White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
