import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Ordering and Delivery Information | Castle Heights Cannabis",
  description: "Call Castle Heights Cannabis for current ordering and delivery information, or visit the 24-hour Ottawa store at 605 Center St.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/delivery",
  },
  openGraph: {
    title: "Ordering and Delivery Information | Castle Heights Cannabis",
    description: "Call for current ordering information or visit 605 Center St in Ottawa, open 24 hours.",
    url: "https://www.castleheightscannabis.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
