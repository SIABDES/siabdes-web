"use client";

import BumdesFundingForm from "@/components/pages/bumdes/profile/bumdes-funding-form";
import useGetBumdesProfile from "@/hooks/bumdes/useGetBumdesProfile";

export default function BumdesProfileFunding() {
  const { data: profile, isLoading, isSuccess } = useGetBumdesProfile();

  return (
    <>
      <div>
        {isLoading && <p>Loading...</p>}
        {isSuccess && profile && <BumdesFundingForm />}
      </div>
    </>
  );
}
