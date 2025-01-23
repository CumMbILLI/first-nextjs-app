import { inter } from "../ui/fonts";

export default function Loading() {
  return (
    <p className={`${inter.className} text-center text-xl`}>
      <b>Loading...</b>
    </p>
  );
}
