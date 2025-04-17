import AndroidSectionOne from "@/components/android-section";
import { AppNavBar } from "@/components/app-nav-bar";
import EmailForm from "@/components/email-form";
import { FeaturesSectionDemoAbout } from "@/components/feature-about";
import HeroSectionOne from "@/components/hero-section-demo-1"
import ProfileSectionOne from "@/components/profile-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
      <AppNavBar></AppNavBar>

     
        <HeroSectionOne />
        <AndroidSectionOne />
        <ProfileSectionOne />
        <FeaturesSectionDemoAbout></FeaturesSectionDemoAbout>
        <EmailForm />

    </div>
  );
}
