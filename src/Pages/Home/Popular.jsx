import Items from "../../components/Items";

const Popular = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-5">
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
        <Items></Items>
      </div>
    </div>
  );
};

export default Popular;
