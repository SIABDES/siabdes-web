import React from 'react';
import MainBusiness from '../heading-3/main-business';
import OtherBusiness from '../heading-3/other-business';

export default function BusinessActivities() {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-6">E. Aktivitas Usaha</h2>
      <div className="p-2">
        <MainBusiness />
        {/* <OtherBusiness /> */}
      </div>
    </div>
  );
}
