import getUserById from "@/actions/user/getProfile";

export default async function Home() {
  let user = await getUserById(1);

  return <main className="w-full flex items-center justify-center">hi</main>;
}
