import { List as AntList, Empty, ListProps } from "antd";

const ScrollableList = <T,>(props: ListProps<T> & { height?: number; fixed?: boolean }) => {
  const { height = 400, fixed = false, ...restProps } = props;
  return (
    <AntList
      locale={{ emptyText: <Empty description="Пусто" /> }}
      className="overflow-x-auto w-full"
      style={{ maxHeight: fixed ? "" : `${height}px`, height: fixed ? `${height}px` : "" }}
      {...restProps}
    />
  );
};

export default ScrollableList;
