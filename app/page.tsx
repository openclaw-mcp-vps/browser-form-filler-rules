export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart form filling with{" "}
          <span className="text-[#58a6ff]">conditional rules</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A browser extension that fills forms with different data sets based on
          URL patterns and form field detection. Built for frontend developers
          and QA engineers who are tired of typing the same test data over and
          over.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">
          Cancel anytime. Works on Chrome and Firefox.
        </p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "URL pattern matching",
            "Multiple data sets",
            "Cross-device sync",
            "React popup UI",
            "Lemon Squeezy billing"
          ].map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">
            Pro
          </p>
          <p className="text-5xl font-bold text-white mb-1">
            $19
            <span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </p>
          <p className="text-sm text-[#6e7681] mb-6">per user, billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited form-filling rules",
              "URL pattern & field detection",
              "Cross-device rule sync",
              "Web dashboard",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-sm hover:bg-[#79b8ff] transition-colors"
          >
            Start subscription
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">
              Which browsers are supported?
            </h3>
            <p className="text-sm text-[#8b949e]">
              FormFiller Rules works on Chrome (and Chromium-based browsers like
              Edge and Brave) as well as Firefox. Install the extension from the
              respective store and connect it to your dashboard account.
            </p>
          </div>
          <div className="border-b border-[#21262d] pb-6">
            <h3 className="font-semibold text-white mb-2">
              How does cross-device sync work?
            </h3>
            <p className="text-sm text-[#8b949e]">
              Your rules are stored in the cloud and synced via the web
              dashboard. Sign in on any device and your rules are available
              instantly — no manual export or import needed.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">
              Can I cancel my subscription?
            </h3>
            <p className="text-sm text-[#8b949e]">
              Yes, cancel anytime from your billing portal with one click. Your
              rules remain accessible until the end of the billing period.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} FormFiller Rules. All rights reserved.
      </footer>
    </main>
  );
}
