import { InputImage } from '@/components';
import { type Post, PostSchema, Status } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Input,
  Select,
  SelectItem,
  Spacer,
  Spinner,
} from '@nextui-org/react';
import { useForm } from 'react-hook-form';

interface formPostProps {
  post?: Post;
  status: Status[];
  onSubmit: (updatedPost: Post) => void;
  isDisabledButton?: boolean;
  isSubmitting?: boolean;
}

export const FormPost = ({
  post,
  status,
  onSubmit,
  isDisabledButton = false,
  isSubmitting,
}: formPostProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Post>({
    resolver: zodResolver(PostSchema),
    mode: 'all', // muestre los errores en onchange, blur y submit
    criteriaMode: 'all', // muestre todos los inputs con error
    defaultValues: post,
  });

  const disabledButton =
    isDisabledButton || Object.keys(errors).length > 0 || !isDirty;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="text-gray-900">
        <Input
          label="Title"
          type="text"
          {...register('title')}
          isInvalid={!!errors.title}
          errorMessage={errors.title?.message}
          fullWidth
        />
        <Spacer y={1} />
        <Input
          type="text"
          label="Author"
          {...register('author')}
          isInvalid={!!errors.author}
          errorMessage={errors.author?.message}
          fullWidth
        />
        <Spacer y={1} />
        <Input
          type="number"
          label="Views"
          {...register('views', { valueAsNumber: true })}
          isInvalid={!!errors.views}
          errorMessage={errors.views?.message}
          fullWidth
        />
        <Spacer y={1} />
        <Input
          label="Date"
          type="date"
          {...register('date')}
          isInvalid={!!errors.date}
          errorMessage={errors.date?.message}
          fullWidth
        />
        <Spacer y={1} />
        <Select
          items={status}
          label="State"
          placeholder="Select an State"
          {...register('estado')}
          isInvalid={!!errors.estado}
          errorMessage={errors.estado?.message}
          fullWidth
        >
          {(estado) => <SelectItem key={estado.key}>{estado.label}</SelectItem>}
        </Select>
        <Spacer y={1} />

        <InputImage
          error={errors.imageUrl}
          label="Post Image"
          name="imageUrl"
          register={register}
          image={{
            url: post?.imageUrl || '',
            alt: 'Image',
            width: 200,
            height: 113,
            className: 'mt-2',
          }}
        />
        <Spacer y={1} />
        <Button type="submit" color="primary" isDisabled={disabledButton}>
          Save
          {isSubmitting && <Spinner size="sm" color="secondary" />}
        </Button>
      </form>
    </div>
  );
};
