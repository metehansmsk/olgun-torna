export function ProductFeatures({ features }: { features: string[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-900">Öne Çıkan Özellikler</h3>
      <ol className="mt-5 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
        {features.map((feature, index) => (
          <li key={feature} className="flex gap-4 bg-white p-6 transition-colors duration-200 hover:bg-neutral-50">
            <span className="text-sm font-medium tabular-nums text-brand" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-[15px] leading-relaxed text-neutral-700">{feature}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
