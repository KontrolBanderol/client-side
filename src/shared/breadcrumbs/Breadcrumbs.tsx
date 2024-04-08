import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

interface Breadcrumbs {
  title: string;
  link: string;
}

type Props = {
  data: Breadcrumbs[];
};

export default function Breadcrumbs({ data }: Props) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index === data.length - 1 ? (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.link}>{item.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index !== data.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
