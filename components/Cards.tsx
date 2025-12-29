
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PostResponse } from "@/lib/types/post";

export default function Cards({ userId, id, title, body }: PostResponse) {
  return (
    <Card className="w-full max-w-sm mt-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
            {body}
        </CardDescription>
        <CardAction>
          <Button variant="link">{userId} | {id}</Button>
        </CardAction>
        </CardHeader>
    </Card>

  );
}
