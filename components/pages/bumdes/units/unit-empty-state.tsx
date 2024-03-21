import Image from "next/image";

export function UnitEmptyState() {
  return (
    <div className="mx-auto w-fit col-span-4 mt-32">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-semibold text-gray-700">
            Tidak Ditemukan Unit
          </p>
          <p className="text-gray-500 text-sm">
            Tambahkan unit baru untuk memulai
          </p>
        </div>
      </div>
    </div>
  );
}
