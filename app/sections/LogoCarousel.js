import React from 'react';
import Image from 'next/image';
import { CommunityImpactEvent, MeetAndGreet, MontrealLaunch, SkillTribeProfile, SpringFest } from "@/constants";

const LogoCarousel = () => {
  const logos = [
    CommunityImpactEvent, MeetAndGreet, MontrealLaunch, SkillTribeProfile, SpringFest
  ]
  return (
    <div className="relative">
      <div className="flex items-center space-x-6 animate-scrollGlobal">
        {logos.map((logo, index) => (
          <div key={index} className="min-w-[150px] flex-shrink-0">
            <Image src={logo} alt={`Logo ${index + 1}`} width={150} height={100} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;