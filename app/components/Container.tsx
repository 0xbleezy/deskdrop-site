export default function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 md:px-[7vw] ${className}`}>
      {children}
    </div>
  );
}
