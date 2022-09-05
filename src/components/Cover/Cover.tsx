import Card from "../UI/Card";

let card = {
  title: "Lorem Ipsum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  btntxt: "See More",
};

const Cover = () => {
  let { title, description, btntxt } = card;
  return (
    <>
      <div className='flex flex-col items-center gap-20 bg-gradient-to-br from-primary to-accent py-20 text-primary-content'>
        <div className='glass -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 text-base-content xl:rounded-box xl:pb-0'>
          <div
            id='component'
            className='className="flex w-full grid-flow-row grid-cols-3 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-10 pb-10 xl:grid xl:overflow-x-auto xl:px-4'
          >
            <div className='flex flex-nowrap'>
              <Card title={title} description={description} btntxt={btntxt} />
              <Card title={title} description={description} btntxt={btntxt} />
              <Card title={title} description={description} btntxt={btntxt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
