"use client";

import useGetBumdesProfile from "@/hooks/bumdes/useGetBumdesProfile";

export default function BumdesProfileIncomes() {
  const { data: profile, isLoading, isSuccess } = useGetBumdesProfile();

  return (
    <>
      <div className="max-w-3xl">
        {isLoading && <p>Loading...</p>}
        {isSuccess && profile && <></>}
      </div>
    </>
  );
}
