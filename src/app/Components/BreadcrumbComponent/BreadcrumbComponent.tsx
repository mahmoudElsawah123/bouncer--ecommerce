import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

type Props = {
  slug: [id: number, cat: string, title: string],
};

export default function BreadcrumbComponent({ slug}: Props) {

  return (
    <div className="container">
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-[#F6F7F8] px-5 py-3 flex justify-center"
      >
        <BreadcrumbItem href="/" className="BreadcrumbItem">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#" className="BreadcrumbItem">
          {slug[1]}
        </BreadcrumbItem>
        <BreadcrumbItem>{slug[2]}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
