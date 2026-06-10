import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Castle Heights Cannabis | Ottawa",
  description: "Get notified when Castle Heights Cannabis launches same-day weed delivery across Ottawa and surrounding areas.",
  alternates: {
    canonical: "https://castleheightscannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
