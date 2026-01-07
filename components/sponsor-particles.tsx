"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArtodeIcon } from "@/components/artode-icon";
import { cn } from "@/lib/utils";

// Standard Heart Path (Lucide/Feather)
const heartPath = "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z";

export const SponsorParticles: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href="https://github.com/sponsors/byadhddev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 relative h-6 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ArtodeIcon
                path={heartPath}
                size={16}
                color={isHovered ? '#D80018' : '#71717a'}
                forceHover={isHovered}
                className="transition-colors duration-300"
            />
            {/* Minimal Static Text */}
            <span className={cn(
                "text-xs font-mono transition-colors duration-300",
                isHovered ? "text-primary" : "text-secondary"
            )}>
                Sponsor Project
            </span>
        </Link>
    );
};
