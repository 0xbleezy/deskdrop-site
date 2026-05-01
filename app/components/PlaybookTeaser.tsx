export default function PlaybookTeaser() {
  return (
    <div className="glass-card p-6 sm:p-8 rounded mt-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center text-lg" aria-hidden="true">
          ▶
        </div>
        <div>
          <h4 className="text-base font-display font-medium text-neutral-900 mb-2">
            Follow-up playbook included
          </h4>
          <p className="text-sm text-neutral-600 leading-relaxed font-light">
            Every order comes with our A/B-tested outreach sequence—the same playbook that&apos;s booked 
            meetings with leaders at Rippling, LinkedIn, Amazon, and Mesirow. Know exactly what to say 
            and when to say it after your gift lands.
          </p>
        </div>
      </div>
    </div>
  );
}
