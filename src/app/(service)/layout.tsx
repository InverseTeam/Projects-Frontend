import { MainLayout } from "@/widgets/layouts/MainLayout";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>
};
