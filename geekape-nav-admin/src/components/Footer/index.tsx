import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = '科技俱乐部导航';
  return (
    <DefaultFooter
      copyright={`2021 ${defaultMessage}`}
      links={[]}
    />
  );
};
