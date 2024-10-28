export default function ListAduan() {
  return (
    <main className="h-[100vh] flex items-center justify-center text-white ">
      <div className="flex justify-center p-6">
        <div className="w-full max-w-3xl bg-sky-600 text-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center py-4">List Aduan</h1>
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="border border-sky-500 px-4 py-2 text-left">
                  Nama Pelanggan
                </th>
                <th className="border border-sky-500 px-4 py-2 text-left">
                  Nomor Pelanggan
                </th>
                <th className="border border-sky-500 px-4 py-2 text-left">
                  Kecamatan Pelanggan
                </th>
                <th className="border border-sky-500 px-4 py-2 text-left">
                  Aduan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-sky-500 px-4 py-2">
                  Ridhwan Fadly
                </td>
                <td className="border border-sky-500 px-4 py-2">512345869</td>
                <td className="border border-sky-500 px-4 py-2">
                  Bangka Selatan
                </td>
                <td className="border border-sky-500 px-4 py-2">
                  Aliran air di perumahan saya keruh dan bau, belum lagi
                  keluarnya sedikit sedikit
                </td>
              </tr>
              <tr>
                <td className="border border-sky-500 px-4 py-2">
                  Marvel Jeremia
                </td>
                <td className="border border-sky-500 px-4 py-2">513456581</td>
                <td className="border border-sky-500 px-4 py-2">Palembang</td>
                <td className="border border-sky-500 px-4 py-2">
                  Terjadi kebocoran pipa air di dekat rumah saya
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
