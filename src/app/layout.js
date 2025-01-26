import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { PopupProvider } from "@/contexts/PopupProvider";
import WheelEventListner from "@/lib/WheelEventforMap"
import FixedSideContact from "@/components/popups/FixedSideContact"
import BottomBarCTA from "@/components/popups/BottomBarCTA"


export const metadata = {
  title: "ONE-ON-ONE",
  description: "Home Care Services that Make Lives Better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rosarivo:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.1/mapsjs-ui.css" />
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-core.js"></script>
        <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-service.js"></script>
        <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"></script>
        <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"></script>

      </head>
      <body className="antialiased">
        <PopupProvider>
          <Header />

          <FixedSideContact />
          <BottomBarCTA />

          {children}
          <Footer />
          <WheelEventListner />
        </PopupProvider>
      </body>
    </html>
  );
}