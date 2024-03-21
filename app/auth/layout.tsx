import LandingNavbar from "@/components/pages/landing/landing-navbar";

export default function AuthRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingNavbar />

      <div className="py-8 w-full">{children}</div>
    </>
  );
}
