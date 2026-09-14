interface SectionHeaderProps {
    header: string;
    eyebrow?: string;
    action?: React.ReactNode;
    className?: string;
}

function SectionHeader({
    header,
    eyebrow,
    action,
    className = "",
}: SectionHeaderProps) {
    return (
        <div
            className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 ${className}`}
        >
            <div className="space-y-1">
                {eyebrow && (
                    <p className="text-xs uppercase tracking-widest font-semibold text-secondary">
                        {eyebrow}
                    </p>
                )}
                <h2 className="text-sidebar-foreground text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight">
                    {header}
                </h2>
            </div>
            {action && <div className="flex items-center gap-2">{action}</div>}
        </div>
    );
}

export default SectionHeader;
