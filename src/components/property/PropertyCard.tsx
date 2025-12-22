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
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-marble mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              status === "available" ? "bg-green-500" : "bg-charcoal/50"
            }`}
          />
          <span className="text-[10px] uppercase tracking-widest text-alabaster font-medium">
            {status === "available" ? "Available" : "Sold"}
          </span>
        </div>
        {/* Golden Visa Badge */}
        {goldenVisaEligible && (
          <div className="absolute top-4 right-4">
            <span className="text-[10px] uppercase tracking-widest text-gold font-medium bg-midnight/80 backdrop-blur-sm px-3 py-1.5">
              Golden Visa
            </span>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div>
        {/* Developer Label */}
        <span className="text-[10px] uppercase tracking-[2px] text-charcoal/50 font-medium">
          {developer}
        </span>
        {/* Title */}
        <h3 className="font-[family-name:var(--font-playfair)] text-xl mt-2 text-midnight group-hover:text-charcoal transition-colors">
          {title}
        </h3>
        {/* Location */}
        <p className="text-sm text-charcoal/60 mt-1">{location}</p>
        {/* Details */}
        <div className="flex items-center gap-4 mt-3 text-xs text-charcoal/50">
          {bedrooms && <span>{bedrooms}</span>}
          {bedrooms && size && <span className="w-1 h-1 bg-charcoal/30 rounded-full" />}
          {size && <span>{size}</span>}
        </div>
        {/* Price */}
        <p className="mt-4 text-sm text-charcoal">
          Starting from <span className="font-medium">{price}</span>
        </p>
      </div>
    </Link>
  );
}

