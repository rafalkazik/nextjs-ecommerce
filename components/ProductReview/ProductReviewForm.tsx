import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { FormsData } from '../CheckoutForm';
import { FormInput } from '../FormInput';
import {
  GetReviewsForProductSlugDocument,
  useCreateProductReviewMutation,
} from '../../generated/graphql';

interface ProductReviewFormProps {
  productSlug: string;
}

export const ProductReviewForm = ({ productSlug }: ProductReviewFormProps) => {
  const schema = yup
    .object({
      content: yup.string().required('This field is required.'),
      headline: yup.string().required('This field is required.'),
      email: yup.string().email().required('This field is required.'),
      name: yup.string().required('This field is required.'),
      rating: yup.number().min(1).max(5).required('This field is required.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormsData>({
    resolver: yupResolver(schema),
  });

  const [createReview, { data, loading, error }] =
    useCreateProductReviewMutation({
      refetchQueries: [
        {
          query: GetReviewsForProductSlugDocument,
          variables: { slug: productSlug },
        },
      ],
    });
  const addReview = () => {};

  const onSubmit = handleSubmit((data) => {
    createReview({
      variables: {
        review: {
          ...data,
          product: {
            connect: {
              slug: productSlug,
            },
          },
        },
      },
    });
  });

  return (
    <form
      className='grid grid-cols-6 gap-4 max-w-md mx-auto'
      onSubmit={onSubmit}
    >
      <div className='col-span-6'>
        <FormInput
          fieldName='content'
          label='Content'
          type='text'
          register={register}
          errors={errors}
          isRequired={true}
          maximLength={20}
          minimLength={2}
        />
      </div>
      <div className='col-span-3'>
        <FormInput
          fieldName='headline'
          label='Headline'
          type='text'
          register={register}
          errors={errors}
          isRequired={true}
          maximLength={20}
          minimLength={2}
        />
      </div>
      <div className='col-span-3'>
        <FormInput
          fieldName='email'
          label='Email'
          type='text'
          register={register}
          errors={errors}
          isRequired={true}
          maximLength={20}
          minimLength={2}
        />
      </div>
      <div className='col-span-3'>
        <FormInput
          fieldName='name'
          label='Name'
          type='text'
          register={register}
          errors={errors}
          isRequired={true}
          maximLength={20}
          minimLength={2}
        />
      </div>
      <div className='col-span-3'>
        <FormInput
          fieldName='rating'
          label='Rating'
          type='number'
          register={register}
          errors={errors}
          isRequired={true}
          maximLength={1}
          minimLength={1}
        />
      </div>
      <div className='col-span-6'>
        <button
          type='submit'
          className='block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg'
        >
          Add review
        </button>
      </div>
    </form>
  );
};
