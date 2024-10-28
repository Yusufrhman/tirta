export default function Aduan() {
  return (
    <main className="h-[100vh] flex items-center justify-center text-white ">
      <div className="w-1/4 h-fit bg-sky-600 px-4 py-8 rounded-3xl">
        <h1 className="font-bold text-2xl text-center">Form Pengaduan</h1>
        <form action="" className="py-4 px-2 flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="nama">Nama Pelanggan</label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="text-lg rounded-md outline-gray-500 px-1 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nama">Nomor Pelanggan</label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="text-lg rounded-md outline-gray-500 px-1 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nama">Kecamatan Pelanggan</label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="text-lg rounded-md outline-gray-500 px-1 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nama">Aduan</label>
            <textarea
              type="text"
              id="nama"
              name="nama"
              className="text-lg rounded-md outline-gray-500 px-1 resize-none text-black"
            />
          </div>
          <button className="bg-blue-300 text-sky-800 rounded-lg font-bold">
            Kirim
          </button>
        </form>
      </div>
    </main>
  );
}
