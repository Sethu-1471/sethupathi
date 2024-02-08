import { Breadcrumbs } from "@material-tailwind/react";
 
export function BreadcrumbsComponent() {
  return (
    <Breadcrumbs separator="•" fullWidth className="w-full bg-tertiary hover:cursor-default">
      <div className="opacity-60">
        Journey
      </div>
      <div className="opacity-60">
        Portfolio
      </div>
      <div>Sethupathi</div>
    </Breadcrumbs>
  );
}