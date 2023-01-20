import { LeftMainNavigation } from '@molecules/LeftMainNavigation';

const Page = () => {
  return (
    <>
      <LeftMainNavigation
        anchorSide='left'
        navigationWidth={80}
        desktopBackgroundColor='#000'
        mobileBackgroundColor='#fff'
      />
      <div>
        <h1>Page</h1>
      </div>
    </>
  );
};
export default Page;
