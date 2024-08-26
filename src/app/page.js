import Image from "next/image";
import Link from "next/link";
import { BookForm } from "@/components/BookForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-center space-y-6 bg-slate-500 px-4">
        <Link href="/" className="text-l font-bold">
          Bookaplace
        </Link>
        <Link href="/order" className="">
          Orders
        </Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="mx-auto bg-gray-300 py-20">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Welcome to Bookaplace!</h1>
          <Image
            src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            width={200}
            height={200}
            alt="imgIxon"
            className="rounded-full"
          />
          <p>Discover the best books in the world.</p>
        </div>
      </div>

      <BookForm />
    </main>
  );
}

// const styles = StyleSheet.create({
//   logo: {
//     height: 40,
//     width: 40,
//   },
// });
