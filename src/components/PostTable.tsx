import { Actions, Paginator } from '@/components';
import type { Post } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table';
import { Link } from 'react-router-dom';

type PostTable = {
  data: Post[];
  paginator: {
    changePage: (page: number) => void;
    page: number;
    maxPages: number;
  };
  emptyContent?: React.ReactNode;
};

export const PostTable = ({ data, paginator, emptyContent }: PostTable) => {
  return (
    <Table
      aria-label="Example static collection table"
      className="text-slate-900"
      selectionMode="single"
      bottomContent={
        <Paginator
          changePage={paginator.changePage}
          page={paginator.page}
          maxPages={paginator.maxPages}
        />
      }
    >
      <TableHeader>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>AUTHOR</TableColumn>
        <TableColumn>VIEWS</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody emptyContent={emptyContent}>
        {data?.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.author}</TableCell>
            <TableCell>{post.views}</TableCell>
            <TableCell width={30}>
              <Actions
                actions={[
                  {
                    value: (
                      <Link
                        to={`/posts/${post.id}`}
                        className="flex items-center"
                      >
                        View
                      </Link>
                    ),
                    label: 'View',
                  },
                  {
                    value: (
                      <Link
                        to={`/posts/${post.id}/edit`}
                        className="flex items-center"
                      >
                        Edit
                      </Link>
                    ),
                    label: 'Edit',
                  },
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
