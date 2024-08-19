import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Socials from "./socials";
import BackButton from "./back-button";

type CardWrapperProps = {
  children?: ReactNode;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  showSocials?: boolean;
};

const AuthCard = ({
  children,
  title,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: CardWrapperProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
    <CardFooter className="flex flex-col gap-8">
      {showSocials && <Socials />}
      <BackButton href={backButtonHref} label={backButtonLabel}></BackButton>
    </CardFooter>
  </Card>
);

export default AuthCard;
