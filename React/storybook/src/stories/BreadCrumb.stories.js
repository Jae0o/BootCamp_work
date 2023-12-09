import BreadCrumb from "../components/BreadCrumb";

export default {
  title: "Component/BreadCrumb",
  component: BreadCrumb,
};

export const Default = () => {
  return (
    <BreadCrumb>
      <BreadCrumb.Item href={"/home"}>Home</BreadCrumb.Item>
      <BreadCrumb.Item href={"/level1"}>Level 1</BreadCrumb.Item>
      <BreadCrumb.Item href={"/level2"}>Level 2</BreadCrumb.Item>
    </BreadCrumb>
  );
};
