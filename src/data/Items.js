import item1 from "../assets/images/rb01-ribbon.webp";
import item2 from "../assets/images/imgvexo2.webp";

// Helper function to create a URL-friendly slug from a string
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/ & /g, "-and-") // Replace & with 'and'
    .replace(/[^\w\s-]/g, "") // Remove all non-word, non-space, non-hyphen chars
    .replace(/\s+/g, "-") // Replace spaces with a hyphen
    .replace(/--+/g, "-"); // Replace multiple hyphens with a single one
};

export const categoryData = [
  {
    id: "fashion",
    title: "Fashion & Textiles",
    imageUrl: item1,
    items: [
      {
        name: "Pillow",
        description: "Soft and customizable decorative pillows.",
        href: "/products/fashion/pillow",
      },
      {
        name: "Sash",
        description: "Elegant fabric sashes for events and decor.",
        href: "/products/fashion/sash",
      },
      {
        name: "Scarf",
        description: "Stylish scarves with custom prints.",
        href: "/products/fashion/scarf",
      },
      {
        name: "Beach Shorts",
        description: "Lightweight, comfortable beach shorts.",
        href: "/products/fashion/beach-shorts",
      },
      {
        name: "Woven Fabric Labels",
        description: "Durable custom woven branding labels.",
        href: "/products/fashion/woven-fabric-labels",
      },
      {
        name: "Blanket",
        description: "Cozy blankets with personalized designs.",
        href: "/products/fashion/blanket",
      },
      {
        name: "Bean Bags",
        description: "Comfortable bean bags with custom covers.",
        href: "/products/fashion/bean-bags",
      },
      {
        name: "Table Cloth",
        description: "Custom table cloths for events or dining.",
        href: "/products/fashion/table-cloth",
      },
      {
        name: "Table Napkin",
        description: "Reusable, eco-friendly fabric napkins.",
        href: "/products/fashion/table-napkin",
      },
      {
        name: "Armband",
        description: "Custom printed armbands for events or teams.",
        href: "/products/fashion/armband",
      },
      {
        name: "Facemask",
        description: "Breathable, reusable printed facemasks.",
        href: "/products/fashion/facemask",
      },
      {
        name: "Apron",
        description: "Durable aprons with your branding or design.",
        href: "/products/fashion/apron",
      },
      {
        name: "Umbrella",
        description: "Sturdy umbrellas with custom prints.",
        href: "/products/fashion/umbrella",
      },
      {
        name: "Velvet Pouches",
        description: "Luxurious velvet pouches for gifts or storage.",
        href: "/products/fashion/velvet-pouches",
      },
    ],
  },
  {
    id: "branding",
    title: "Office Branding",
    imageUrl: item2,
    items: [
      {
        name: "Forster Sticker",
        description: "Durable custom forster stickers for branding.",
        href: "/products/branding/forster-sticker",
      },
      {
        name: "Printed Frosted Sticker",
        description: "Elegant frosted stickers with custom prints.",
        href: "/products/branding/printed-frosted-sticker",
      },
      {
        name: "Vinyl Lettering",
        description: "Precision-cut vinyl letters for signage and decor.",
        href: "/products/branding/vinyl-lettering",
      },
      {
        name: "One Way Vision Sticker",
        description: "Perforated stickers for glass with one-way visibility.",
        href: "/products/branding/one-way-vision-sticker",
      },
      {
        name: "Wall Vinyl Lettering",
        description: "Custom vinyl text for walls and interiors.",
        href: "/products/branding/wall-vinyl-lettering",
      },
      {
        name: "Wall Stickers",
        description: "Creative wall stickers for decoration or branding.",
        href: "/products/branding/wall-stickers",
      },
      {
        name: "Large Posters",
        description: "High-quality large format posters for promotions.",
        href: "/products/branding/large-posters",
      },
      {
        name: "Hanging Posters",
        description: "Lightweight posters designed for easy hanging.",
        href: "/products/branding/hanging-posters",
      },
    ],
  },
  {
    id: "frames",
    title: "Frames",
    imageUrl: item1,
    items: [
      {
        name: "Canvas Frames",
        description: "High-quality canvas frames with custom prints.",
        href: "/products/frames/canvas-frames",
      },
      {
        name: "Wooden Frames",
        description: "Elegant wooden frames for photos and artwork.",
        href: "/products/frames/wooden-frames",
      },
      {
        name: "Acrylic Frames",
        description: "Modern clear acrylic frames with sleek design.",
        href: "/products/frames/acrylic-frames",
      },
      {
        name: "Metal Art",
        description: "Durable metal wall art with premium finishes.",
        href: "/products/frames/metal-art",
      },
    ],
  },
  {
    id: "vehicle",
    title: "Vehicle Graphics",
    imageUrl: item2,
    items: [
      {
        name: "Car Door Branding",
        description: "Custom vinyl stickers and graphics for car doors.",
        href: "/products/vehicle/car-door-branding",
      },
      {
        name: "Half Wrap Vehicle",
        description: "Eye-catching half vehicle wraps for promotions.",
        href: "/products/vehicle/half-wrap-vehicle",
      },
      {
        name: "Van Branding",
        description: "Full and partial branding solutions for vans.",
        href: "/products/vehicle/van-branding",
      },
    ],
  },
  {
    id: "signages",
    title: "Signages",
    imageUrl: item1,
    items: [
      {
        name: "3D Signage (Unlit)",
        description: "Custom 3D signage without lighting for a bold look.",
        href: "/products/signages/3d-signage-unlit",
      },
      {
        name: "3D Signage (Backlit)",
        description: "Illuminated 3D signage with a glowing backlight effect.",
        href: "/products/signages/3d-signage-backlit",
      },
      {
        name: "3D Signage (Outlit)",
        description: "Bright 3D signage with outward lighting for visibility.",
        href: "/products/signages/3d-signage-outlit",
      },
      {
        name: "Flex Face Signage",
        description: "Durable and versatile flex face signs for outdoor use.",
        href: "/products/signages/flex-face-signage",
      },
      {
        name: "Frontlit Signage",
        description: "Classic frontlit signage for clear, visible displays.",
        href: "/products/signages/frontlit-signage",
      },
      {
        name: "Neon Signage",
        description: "Vibrant neon signs for eye-catching designs.",
        href: "/products/signages/neon-signage",
      },
      {
        name: "Light Box Signage",
        description: "Backlit light boxes for impactful advertising.",
        href: "/products/signages/light-box-signage",
      },
      {
        name: "Hanging Signage",
        description: "Stylish hanging signs for shops, cafes, and events.",
        href: "/products/signages/hanging-signage",
      },
      {
        name: "Acrylic Letters",
        description: "Custom acrylic letters for signage and branding.",
        href: "/products/signages/acrylic-letters",
      },
      {
        name: "Forex Boards",
        description: "Lightweight yet durable forex boards for display and signage.",
        href: "/products/signages/forex-boards",
      },
    ],
  },
  {
    id: "flags",
    title: "Flags",
    imageUrl: item1,
    items: [
      {
        name: "L Shape Flag",
        description: "Custom L-shaped flags for events and branding.",
        href: "/products/flags/l-shape-flag",
      },
      {
        name: "Sail Flag",
        description: "Tall, curved sail flags for outdoor promotions.",
        href: "/products/flags/sail-flag",
      },
      {
        name: "Teardrop Flag",
        description: "Eye-catching teardrop flags with custom prints.",
        href: "/products/flags/teardrop-flag",
      },
      {
        name: "Blade Shape Flag",
        description: "Dynamic blade-shaped flags for advertising.",
        href: "/products/flags/blade-shape-flag",
      },
      {
        name: "Car Desert Flag",
        description: "Durable car desert flags for off-road visibility.",
        href: "/products/flags/car-desert-flag",
      },
      {
        name: "Pennant Flag",
        description: "Classic triangular pennant flags for events and décor.",
        href: "/products/flags/pennant-flag",
      },
      {
        name: "Bunting Flags",
        description: "String bunting flags for celebrations and promotions.",
        href: "/products/flags/bunting-flags",
      },
      {
        name: "Toothpick Flags",
        description: "Mini printed flags for food and decoration.",
        href: "/products/flags/toothpick-flags",
      },
      {
        name: "Hand Flags",
        description: "Portable hand-held flags for rallies and events.",
        href: "/products/flags/hand-flags",
      },
      {
        name: "Body Flag",
        description: "Wearable flags designed for sports and festivals.",
        href: "/products/flags/body-flag",
      },
      {
        name: "Hoisting Flag",
        description: "Large flags made for poles and hoisting.",
        href: "/products/flags/hoisting-flag",
      },
      {
        name: "Stadium Flag",
        description: "Massive flags for stadiums and sports events.",
        href: "/products/flags/stadium-flag",
      },
      {
        name: "Festival Flag",
        description: "Colorful festival flags for cultural celebrations.",
        href: "/products/flags/festival-flag",
      },
      {
        name: "Pole Flag",
        description: "Custom pole-mounted flags for outdoor use.",
        href: "/products/flags/pole-flag",
      },
      {
        name: "Table Flags",
        description: "Mini table flags for offices, events, or décor.",
        href: "/products/flags/table-flags",
      },
    ],
  },
  {
    id: "exhibition",
    title: "Backdrop & Exhibition",
    imageUrl: item1,
    items: [
      {
        name: "Roll Up Banners",
        description: "Portable roll-up banners for events and promotions.",
        href: "/products/exhibition/roll-up-banners",
      },
      {
        name: "X Banners",
        description: "Lightweight X-frame banners with interchangeable prints.",
        href: "/products/exhibition/x-banners",
      },
      {
        name: "Banners (PVC or Fabric)",
        description: "Durable banners available in PVC or fabric material.",
        href: "/products/exhibition/banners-pvc-or-fabric",
      },
      {
        name: "Spring A Board",
        description: "Double-sided spring A-frame boards for outdoor ads.",
        href: "/products/exhibition/spring-a-board",
      },
      {
        name: "Tobleron Frame",
        description: "Triangular Tobleron display frames for 360° visibility.",
        href: "/products/exhibition/tobleron-frame",
      },
      {
        name: "Cutout Standee",
        description: "Custom life-size cutout standees for events and branding.",
        href: "/products/exhibition/cutout-standee",
      },
      {
        name: "Tent / Gazebo",
        description: "Branded tents and gazebos for outdoor promotions.",
        href: "/products/exhibition/tent-gazebo",
      },
      {
        name: "Outdoor Umbrella",
        description: "Custom printed umbrellas for shade and branding.",
        href: "/products/exhibition/outdoor-umbrella",
      },
      {
        name: "Table Cover / Cloth",
        description: "Promotional table covers with custom designs.",
        href: "/products/exhibition/table-cover-cloth",
      },
      {
        name: "Popup Banner",
        description: "Easy setup popup banners for quick promotions.",
        href: "/products/exhibition/popup-banner",
      },
      {
        name: "Fabric Popup",
        description: "Seamless fabric popup displays for events.",
        href: "/products/exhibition/fabric-popup",
      },
      {
        name: "Step and Repeat Banner",
        description: "Backdrops with repeating logos for media walls.",
        href: "/products/exhibition/step-and-repeat-banner",
      },
      {
        name: "Curved Backdrop",
        description: "Curved display backdrops for exhibitions and shows.",
        href: "/products/exhibition/curved-backdrop",
      },
      {
        name: "Backlit Backdrop",
        description: "Illuminated backdrops for high-impact displays.",
        href: "/products/exhibition/backlit-backdrop",
      },
      {
        name: "Oval Fabric Counter",
        description: "Portable oval counters with fabric branding.",
        href: "/products/exhibition/oval-fabric-counter",
      },
      {
        name: "Promotional Table",
        description: "Branded tables for exhibitions and sampling events.",
        href: "/products/exhibition/promotional-table",
      },
      {
        name: "Social Media Frame",
        description: "Fun social media photo frames for events.",
        href: "/products/exhibition/social-media-frame",
      },
      {
        name: "Giant Cheques",
        description: "Oversized presentation cheques for ceremonies.",
        href: "/products/exhibition/giant-cheques",
      },
    ],
  },
  {
    id: "gifts",
    title: "Corporate Gifts",
    imageUrl: item1,
    items: [
      {
        name: "PU Notebook",
        description: "Premium PU leather notebooks for corporate branding.",
        href: "/products/gifts/pu-notebook",
      },
      {
        name: "Pens",
        description: "Custom branded pens for everyday use.",
        href: "/products/gifts/pens",
      },
      {
        name: "PU Organizer",
        description: "Stylish PU leather organizers for professionals.",
        href: "/products/gifts/pu-organizer",
      },
      {
        name: "Corporate Gift Sets",
        description: "Curated corporate gift sets with branding options.",
        href: "/products/gifts/corporate-gift-sets",
      },
      {
        name: "Mousepad",
        description: "Custom printed mousepads for office and events.",
        href: "/products/gifts/mousepad",
      },
      {
        name: "T-Shirt",
        description: "Branded cotton T-shirts with custom prints.",
        href: "/products/gifts/t-shirt",
      },
      {
        name: "Jersey",
        description: "Sports jerseys with team or event branding.",
        href: "/products/gifts/jersey",
      },
      {
        name: "Caps",
        description: "Custom embroidered or printed caps.",
        href: "/products/gifts/caps",
      },
      {
        name: "Safety Vests",
        description: "High-visibility safety vests with logos.",
        href: "/products/gifts/safety-vests",
      },
      {
        name: "Wrist Band",
        description: "Custom silicone or fabric wristbands.",
        href: "/products/gifts/wrist-band",
      },
      {
        name: "Lanyard",
        description: "Branded lanyards for ID cards and events.",
        href: "/products/gifts/lanyard",
      },
      {
        name: "ID Cards & Reel Badges",
        description: "Custom ID cards with retractable reel badges.",
        href: "/products/gifts/id-cards-and-reel-badges",
      },
      {
        name: "Name Badge",
        description: "Durable name badges for staff and events.",
        href: "/products/gifts/name-badge",
      },
      {
        name: "Suit Pin",
        description: "Elegant lapel pins with custom designs.",
        href: "/products/gifts/suit-pin",
      },
      {
        name: "Keychain",
        description: "Custom keychains in various materials.",
        href: "/products/gifts/keychain",
      },
      {
        name: "USB",
        description: "Branded USB flash drives for promotions.",
        href: "/products/gifts/usb",
      },
      {
        name: "Mug",
        description: "Custom printed mugs for gifts and branding.",
        href: "/products/gifts/mug",
      },
      {
        name: "Bottles",
        description: "Reusable branded bottles for daily use.",
        href: "/products/gifts/bottles",
      },
      {
        name: "Tumblers",
        description: "Insulated tumblers for hot and cold drinks.",
        href: "/products/gifts/tumblers",
      },
      {
        name: "Coasters",
        description: "Custom branded coasters for tables and events.",
        href: "/products/gifts/coasters",
      },
      {
        name: "Coffee Stencils",
        description: "Custom stencils for branded latte art.",
        href: "/products/gifts/coffee-stencils",
      },
      {
        name: "Paper Bag",
        description: "Eco-friendly paper bags with branding.",
        href: "/products/gifts/paper-bag",
      },
      {
        name: "Kraft Paper Bag",
        description: "Durable kraft paper bags with custom prints.",
        href: "/products/gifts/kraft-paper-bag",
      },
      {
        name: "Non Woven Bag",
        description: "Reusable non-woven fabric bags for promotions.",
        href: "/products/gifts/non-woven-bag",
      },
      {
        name: "Jute Bag",
        description: "Eco-friendly jute bags for sustainable branding.",
        href: "/products/gifts/jute-bag",
      },
      {
        name: "Tote Bag",
        description: "Stylish tote bags with custom prints.",
        href: "/products/gifts/tote-bag",
      },
      {
        name: "Canvas Bag",
        description: "Durable canvas bags with personalized branding.",
        href: "/products/gifts/canvas-bag",
      },
      {
        name: "Drawstring Bag",
        description: "Lightweight drawstring bags for events.",
        href: "/products/gifts/drawstring-bag",
      },
      {
        name: "Cotton String Bag",
        description: "Eco-friendly cotton string bags.",
        href: "/products/gifts/cotton-string-bag",
      },
      {
        name: "Napkin",
        description: "Custom printed napkins for events and branding.",
        href: "/products/gifts/napkin",
      },
      {
        name: "Paper Cup",
        description: "Disposable paper cups with custom prints.",
        href: "/products/gifts/paper-cup",
      },
      {
        name: "Water Bottle Label",
        description: "Custom printed labels for water bottles.",
        href: "/products/gifts/water-bottle-label",
      },
    ],
  },
  {
    id: "stickers",
    title: "Stickers & Labels",
    imageUrl: item1,
    items: [
      {
        name: "Vinyl Stickers",
        description: "Durable vinyl stickers for indoor and outdoor use.",
        href: "/products/stickers/vinyl-stickers",
      },
      {
        name: "Water Bottle Labels",
        description: "Custom labels designed for bottles and packaging.",
        href: "/products/stickers/water-bottle-labels",
      },
      {
        name: "Floor Stickers",
        description: "Slip-resistant floor stickers for safety and promotions.",
        href: "/products/stickers/floor-stickers",
      },
      {
        name: "Magnet Stickers",
        description: "Reusable magnetic stickers for branding and décor.",
        href: "/products/stickers/magnet-stickers",
      },
      {
        name: "Transparent Stickers",
        description: "Clear stickers for sleek, modern branding.",
        href: "/products/stickers/transparent-stickers",
      },
      {
        name: "Paper Stickers",
        description: "Cost-effective paper stickers for packaging and labels.",
        href: "/products/stickers/paper-stickers",
      },
      {
        name: "White Ink Stickers",
        description: "Premium stickers with white ink printing for bold effects.",
        href: "/products/stickers/white-ink-stickers",
      },
      {
        name: "Epoxy Stickers",
        description: "Glossy 3D dome epoxy stickers for durability.",
        href: "/products/stickers/epoxy-stickers",
      },
      {
        name: "Foil Stickers",
        description: "Shiny foil stickers for premium product branding.",
        href: "/products/stickers/foil-stickers",
      },
      {
        name: "Hologram Stickers",
        description: "Security and decorative hologram stickers.",
        href: "/products/stickers/hologram-stickers",
      },
      {
        name: "Roll Stickers",
        description: "Bulk roll stickers for easy application and packaging.",
        href: "/products/stickers/roll-stickers",
      },
    ],
  },
  {
    id: "marketing",
    title: "Print & Marketing",
    imageUrl: item1,
    items: [
      {
        name: "Booklets",
        description: "Custom booklets for marketing and corporate use.",
        href: "/products/marketing/booklets",
      },
      {
        name: "Flyers",
        description: "Eye-catching flyers for promotions and events.",
        href: "/products/marketing/flyers",
      },
      {
        name: "Brochures",
        description: "Professional brochures for product and service showcase.",
        href: "/products/marketing/brochures",
      },
      {
        name: "Stickers",
        description: "Custom stickers for branding and packaging.",
        href: "/products/marketing/stickers",
      },
      {
        name: "Business Cards",
        description: "Premium business cards with custom designs.",
        href: "/products/marketing/business-cards",
      },
      {
        name: "Letterhead",
        description: "Personalized letterhead for corporate correspondence.",
        href: "/products/marketing/letterhead",
      },
      {
        name: "Envelopes",
        description: "Custom printed envelopes for branding.",
        href: "/products/marketing/envelopes",
      },
      {
        name: "Folders",
        description: "Branded folders for documents and presentations.",
        href: "/products/marketing/folders",
      },
      {
        name: "Notepads",
        description: "Custom notepads for office or promotional use.",
        href: "/products/marketing/notepads",
      },
      {
        name: "Thank You Cards",
        description: "Personalized thank you cards for clients and events.",
        href: "/products/marketing/thank-you-cards",
      },
      {
        name: "Certificates",
        description: "Custom certificates for awards and recognition.",
        href: "/products/marketing/certificates",
      },
      {
        name: "Calendars",
        description: "Branded calendars for office or promotional giveaways.",
        href: "/products/marketing/calendars",
      },
      {
        name: "Tags",
        description: "Custom printed tags for products and packaging.",
        href: "/products/marketing/tags",
      },
      {
        name: "Vouchers",
        description: "Promotional or gift vouchers with branding.",
        href: "/products/marketing/vouchers",
      },
      {
        name: "Tent Cards",
        description: "Table tent cards for events, promotions, or restaurants.",
        href: "/products/marketing/tent-cards",
      },
      {
        name: "Car Mat",
        description: "Custom printed car mats for branding or gifts.",
        href: "/products/marketing/car-mat",
      },
      {
        name: "Stamp",
        description: "Personalized stamps for office and branding.",
        href: "/products/marketing/stamp",
      },
      {
        name: "Embossing Seal",
        description: "Professional embossing seals for certificates and documents.",
        href: "/products/marketing/embossing-seal",
      },
      {
        name: "Vax Seal",
        description: "Tamper-evident vax seals for secure packaging.",
        href: "/products/marketing/vax-seal",
      },
    ],
  },
  {
    id: "vouchers",
    title: "Voucher Books/NCR",
    imageUrl: item1,
    items: [
      {
        name: "Invoice",
        description: "Custom invoices for billing and record-keeping.",
        href: "/products/vouchers/invoice",
      },
      {
        name: "Receipt Voucher",
        description: "Professional receipt vouchers for payments received.",
        href: "/products/vouchers/receipt-voucher",
      },
      {
        name: "Payment Voucher",
        description: "Payment vouchers for financial transactions.",
        href: "/products/vouchers/payment-voucher",
      },
      {
        name: "Petty Cash Voucher",
        description: "Vouchers to manage petty cash expenses.",
        href: "/products/vouchers/petty-cash-voucher",
      },
      {
        name: "Delivery Order",
        description: "Official delivery orders for shipments and logistics.",
        href: "/products/vouchers/delivery-order",
      },
    ],
  },
];