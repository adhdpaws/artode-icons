import { SiteHeader } from "@/components/site-header";
import { IconPlayground } from "@/components/icon-playground";
import paths from "@/paths.json";

export default function PlaygroundPage() {
    const allIcons = Object.entries(paths) as [string, string][];

    return (
        <main className="flex min-h-screen flex-col items-center bg-background text-foreground selection:bg-primary/20 selection:text-primary">
            <div className="w-full max-w-screen-2xl border-x border-secondary/10 min-h-screen flex flex-col">
                <SiteHeader />
                <IconPlayground allIcons={allIcons} />
            </div>
        </main>
    );
}
