"use client";

import BumdesProfileForm from "@/components/pages/bumdes/profile/bumdes-profile-form";
import useGetBumdesProfile from "@/hooks/bumdes/useGetBumdesProfile";

export default function BumdesUnitProfile() {
  const { data: profile, isLoading, isSuccess } = useGetBumdesProfile();

  return (
    <>
      <div className="max-w-3xl">
        {isLoading && <p>Loading...</p>}
        {isSuccess && profile && <BumdesProfileForm profile={profile.data} />}
      </div>
    </>
  );
}
