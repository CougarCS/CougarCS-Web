import { MetaData } from "../../components/MetaData";
import UserRegister from "../../components/UserRegister";

export default function Join() {
  const metaData = {
    title: "Join",
    desc: "Join CougarCS",
    url: "https://cougarcs.com/join",
    img: "https://i.ibb.co/NTLFrdj/cougarcs-background11.jpg",
  };

  return (
    <>
      <MetaData {...metaData} />
      <UserRegister />
    </>
  );
}
