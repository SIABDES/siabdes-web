import { Card, CardContent } from '@/components/ui/card';

interface PPNOverviewCardProps {
  title: string;
  mainText: string;
}

export default function PPNOverviewCard({
  mainText,
  title,
}: PPNOverviewCardProps) {
  return (
    <Card>
      <CardContent className="py-4">
        <h6 className="font-medium text-sm">{title}</h6>

        <div className="mt-2">
          <p className="text-xl font-semibold">{mainText}</p>
        </div>
      </CardContent>
    </Card>
  );
}
