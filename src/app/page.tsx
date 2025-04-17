import AndroidSectionOne from "@/components/android-section";
import { AppNavBar } from "@/components/app-nav-bar";
import EmailForm from "@/components/email-form";
import HeroSectionOne from "@/components/hero-section-demo-1"
import ProfileSectionOne from "@/components/profile-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
      <AppNavBar></AppNavBar>

      <main className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h1>fuck</h1>
        <HeroSectionOne />
        <AndroidSectionOne />
        <ProfileSectionOne />
        <EmailForm />
      </main>
    </div>
  );
}
