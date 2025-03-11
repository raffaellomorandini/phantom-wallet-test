'use client';

import dynamic from 'next/dynamic';
import { useWallet } from "@solana/wallet-adapter-react";
import { SendSolForm } from '@/components/SendSolForm';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export default function Home() {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Solana Wallet Integration</h1>
      <WalletMultiButtonDynamic />
      {connected && (
        <>
          <p className="text-green-500">
            Successfully connected to Phantom wallet!
          </p>
          <SendSolForm />
        </>
      )}
    </div>
  );
}
