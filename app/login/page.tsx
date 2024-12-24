'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold text-gray-900">ログイン</h1>
                    <p className="text-gray-500">
                        Googleアカウントでログインしてください
                    </p>
                </div>

                <button
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <Image
                        src="/google.svg"
                        alt="Google logo"
                        width={24}
                        height={24}
                        priority
                    />
                    <span className="text-gray-700">Googleでログイン</span>
                </button>
            </div>
        </div>
    );
}
