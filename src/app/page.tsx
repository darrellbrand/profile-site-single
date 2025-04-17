import AndroidSectionOne from "@/components/android-section";
import { AppNavBar } from "@/components/app-nav-bar";
import HeroSectionOne from "@/components/hero-section-demo-1"
import ProfileSectionOne from "@/components/profile-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppNavBar></AppNavBar>
      <HeroSectionOne></HeroSectionOne>
      <AndroidSectionOne></AndroidSectionOne>
      <ProfileSectionOne></ProfileSectionOne>
    </div>
  );
}
