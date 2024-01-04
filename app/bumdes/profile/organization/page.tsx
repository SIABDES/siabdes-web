"use client";

import BumdesOrganizationForm from "@/components/pages/bumdes/profile/bumdes-organization-form";
import useGetBumdesOrganization from "@/hooks/bumdes/useGetBumdesOrganization";

export default function BumdesProfileOrganization() {
  const {
    data: organization,
    isSuccess,
    isLoading,
  } = useGetBumdesOrganization();

  return (
    <>
      <div className="max-w-3xl">
        {isLoading && <p>Loading...</p>}
        {isSuccess && organization && (
          <BumdesOrganizationForm organization={organization.data} />
        )}
      </div>
    </>
  );
}
