import Navigation from "@/components/Navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <Navigation />
      </div>
      {children}
    </section>
  );
}
