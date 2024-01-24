import { Card, CardContent } from "@/components/ui/card";

interface Pph21OverviewCardProps {
  title: string;
  mainText: string;
  subText?: string;
}

export default function Pph21OverviewCard({
  mainText,
  title,
  subText,
}: Pph21OverviewCardProps) {
  return (
    <Card>
      <CardContent className="py-4">
        <h6 className="font-medium text-sm">{title}</h6>

        <div className="mt-2">
          <p className="text-xl font-semibold">{mainText}</p>
          {subText && (
            <p className="text-xs text-muted-foreground">{subText}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
