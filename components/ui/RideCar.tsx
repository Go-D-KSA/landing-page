import Image from "next/image";
import { cn } from "@/lib/utils";

type RideCarProps = {
  className?: string;
  priority?: boolean;
};

export function RideCar({ className, priority = false }: RideCarProps) {
  return (
    <span className={cn("ride-car", className)} aria-hidden="true">
      <Image
        className="ride-car-body"
        src="/images/go-d-green-sedan.png"
        alt=""
        width={1589}
        height={499}
        priority={priority}
        sizes="(max-width: 720px) 190px, 270px"
      />
      <Image
        className="ride-car-wheel ride-car-wheel-rear"
        src="/images/go-d-wheel-rear.png"
        alt=""
        width={230}
        height={230}
        priority={priority}
        sizes="(max-width: 720px) 30px, 40px"
      />
      <Image
        className="ride-car-wheel ride-car-wheel-front"
        src="/images/go-d-wheel-front.png"
        alt=""
        width={230}
        height={230}
        priority={priority}
        sizes="(max-width: 720px) 30px, 40px"
      />
    </span>
  );
}
