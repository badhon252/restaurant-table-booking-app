import Image from "next/image";

export default function MenuCard({ img, text }) {
  return (
    <div>
      <Image src={img} alt="Burger image." />
      <div>{text}</div>
    </div>
  );
}
