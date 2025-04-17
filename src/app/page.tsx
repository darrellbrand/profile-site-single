import AndroidSectionOne from "@/components/android-section";
import { AppNavBar } from "@/components/app-nav-bar";
import EmailForm from "@/components/email-form";
import HeroSectionOne from "@/components/hero-section-demo-1"
import ProfileSectionOne from "@/components/profile-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
      <AppNavBar></AppNavBar>

     
        <HeroSectionOne />
        <AndroidSectionOne />
        <ProfileSectionOne />
        <EmailForm />

    </div>
  );
}
