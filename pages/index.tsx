import Head from "next/head";
import dynamic from "next/dynamic";
import { config } from "@/utils/config";
import { useAppContext } from "@/utils/context";
import { currencies } from "@/utils/currencies";
import { rainbowKitConfig as wagmiConfig } from "@/utils/wagmiConfig";
import { Spinner } from "@/components/ui";
import Script from "next/script";
import { useAccount } from "wagmi";
const InvoiceDashboard = dynamic(
  () => import("@requestnetwork/invoice-dashboard/react"),
  { ssr: false, loading: () => <Spinner /> }
);
export default function InvoiceDashboardPage() {
  const {address} = useAccount();
  const { requestNetwork, isDecryptionEnabled, enableDecryption } = useAppContext();
  return (
    <>
      <Head>
        <title>Request Invoicing</title>
      </Head>
      <div className="container m-auto  w-[100%]">
      <Script id="chatbot" data-agent-id="67518624b0b24db33b575d1b" src="https://script-sepia.vercel.app/ChatBot.js"></Script>
        <InvoiceDashboard
          config={config}
          currencies={currencies}
          requestNetwork={requestNetwork}
          wagmiConfig={wagmiConfig}
          isDecryptionEnabled={isDecryptionEnabled}
          enableDecryption={enableDecryption}
        />
      </div>
    </>
  );
}
