import { Skeleton } from '@nextui-org/react';

type InputProps = {
  className?: string;
};

const Input = ({ className = '' }: InputProps) => (
  <Skeleton className={`w-full rounded-lg h-14 ${className}`}>
    <div className="h-full w-full rounded-lg  bg-default-200"></div>
  </Skeleton>
);

const Button = () => (
  <Skeleton className="w-20 rounded-lg h-10">
    <div className="h-full w-full rounded-lg  bg-default-200"></div>
  </Skeleton>
);

const Image = () => (
  <Skeleton className="w-[200px] rounded-lg h-[113px]">
    <div className="h-full w-full rounded-lg  bg-default-200"></div>
  </Skeleton>
);

const Line = () => (
  <Skeleton className="w-3/5 rounded-lg">
    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
  </Skeleton>
);

export const FieldSkeleton = {
  Input,
  Button,
  Image,
  Line,
};
