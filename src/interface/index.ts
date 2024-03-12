interface PostsArray {
  props: PostsArray;
  userId: number;
  id: number;
  title: string;
  body: string;
}
type Props = {
  props: Array<PostsArray>;
};
interface numberPagination {
  numb?: number | null;
  pagination?: boolean;
}
interface makeRoutes {
  id: string;
  path: string;
  element: JSX.Element;
}
