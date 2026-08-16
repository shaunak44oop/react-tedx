import UnicornScene from "unicornstudio-react";

interface UnicornBgProps {
  projectId: string;
}

export function UnicornBg({ projectId }: UnicornBgProps) {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
      <div className="relative h-full w-full opacity-80">
        <UnicornScene projectId={projectId} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink" />
    </div>
  );
}