import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // PRAKTIKUM 3 (MENAMBAHKAN FUNGSI MYBUTTON)
  function MyButton() {
    return (
      <a
        href="http://localhost:3000"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg
    blue-600 transition duration-300"
      >
        Buka Halaman
      </a>
    );
  }

  // PRAKTIKUM 4 (MENAMBAHKAN FUNGSI PROFILE)
  function Profile() {
    return (
      <>
        <div className="text-xs">Developed by: {user.name}</div>
        <img
          className="rounded-full"
          src={user.imageUrl}
          alt={"Foto " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </>
    );
  }
  const user = {
    name: "Fulanah bin Fulan",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    // TAMPILAN DAFTAR PRAKTIKUM
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold mb-4">Daftar Hasil Praktikum</h1>
                <div className="space-y-4">
                  <Link href="/praktikum1" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Praktikum 1: Pengantar Pemrograman Berbasis Framework Dan ReactJS
                  </Link>
                  <Link href="/praktikum2" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Praktikum 2: Konsep Dasar ReactJS
                  </Link>
                  <Link href="/praktikum3" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Praktikum 3
                  </Link>
                  <Link href="/praktikum4" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Praktikum 4
                  </Link>
                  <Link href="/praktikum5" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Praktikum 5
                  </Link>
                  {/* Tambahkan link praktikum lainnya di sini */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
