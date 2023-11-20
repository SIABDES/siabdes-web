import React, { useState } from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [isDeleting, setDeleting] = useState(false);

  const handleConfirm = async () => {
    try {
      setDeleting(true);
      //   const response = await fetch('https://example.com/api/delete', {
      //     method: 'DELETE',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       // Tambahkan header otorisasi atau sesuai kebutuhan
      //     },
      //     // Tambahkan body jika diperlukan
      //     // body: JSON.stringify({ dataId: 'dataIdToDelete' }),
      //   });

      //   if (response.ok) {
      //     onConfirm();
      //   } else {
      //     console.error('Error deleting data:', response.statusText);
      //   }
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <p className="text-lg font-semibold mb-4">
              Apakah Anda yakin ingin menghapus data ini?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                onClick={handleConfirm}
                disabled={isDeleting}
              >
                {isDeleting ? 'Menghapus...' : 'Hapus'}
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={onClose}
                disabled={isDeleting}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
