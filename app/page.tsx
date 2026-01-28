import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Real-Time Assets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Investment Portfolio
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Track your investment portfolio in real-time with advanced analytics, 
            live market data, and intelligent insights.
          </p>
          <Link
            href={"/dashboard"}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/25"
          >
            View Dashboard <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real-Time Updates</h3>
            <p className="text-slate-400">
              Live price updates every 3 seconds with smooth animations and instant notifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Advanced Analytics</h3>
            <p className="text-slate-400">
              Performance charts, allocation breakdowns, and comprehensive portfolio insights.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Smart Filtering</h3>
            <p className="text-slate-400">
              Debounced search with efficient client-side filtering and multiple sort options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}