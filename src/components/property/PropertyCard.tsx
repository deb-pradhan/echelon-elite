import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  developer: string;
  bedrooms?: string;
  size?: string;
  goldenVisaEligible?: boolean;
  status?: "available" | "sold";
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  developer,
  bedrooms,
  size,
  goldenVisaEligible = true,
  status = "available",
}: PropertyCardProps) {
  return (
    <Link href={`/properties/${id}`} className="group block">
      {/* Image Container - 4:5 Aspect Ratio per design system */}
      <div className="relative aspect-[4/5] overflow-hidden bg-paper mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
        />
        {/* Status Pill */}
        <div className="absolute top-5 right-5">
          <span className="status-pill">
            {status === "available" ? "Open" : "Sold"}
          </span>
        </div>
        {/* Golden Visa Badge */}
        {goldenVisaEligible && (
          <div className="absolute top-5 left-5">
            <span className="text-[10px] uppercase tracking-[0.15em] text-paper font-normal bg-void/80 backdrop-blur-sm px-4 py-2">
              Golden Visa
            </span>
          </div>
        )}
        {/* Subtle overlay on hover */}
        <div 
          className="absolute inset-0 bg-void/0 group-hover:bg-void/10 transition-colors duration-[400ms]"
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
        />
      </div>

      {/* Content - Typography below image per design system */}
      <div>
        {/* Developer Label */}
        <span className="text-label text-stone">
          {developer}
        </span>
        {/* Title - Serif H3 */}
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl mt-3 text-void group-hover:text-gilt transition-colors duration-[400ms] tracking-[-0.01em]"
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
        >
          {title}
        </h3>
        {/* Location */}
        <p className="text-sm text-stone mt-2">{location}</p>
        {/* Details */}
        <div className="flex items-center gap-4 mt-4 text-sm text-stone">
          {bedrooms && <span>{bedrooms}</span>}
          {bedrooms && size && <span className="w-1 h-1 bg-stone/50 rounded-full" />}
          {size && <span>{size}</span>}
        </div>
        {/* Price - Sans Regular */}
        <p className="mt-5 text-sm text-void">
          Starting from <span className="font-normal">{price}</span>
        </p>
      </div>
    </Link>
  );
}
