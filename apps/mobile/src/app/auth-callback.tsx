// De terugweg van Apple en Google (features/auth/socialLogin.ts).
//
// Op iOS vangt het inlogvenster de terugweg zelf af en komt dit scherm nooit
// in beeld. Op Android opent de terugweg de app via een deeplink, en dan
// navigeert expo-router hierheen. Het scherm doet niets dan plaatsmaken: het
// inlogscherm eronder wisselt de code in en gaat zelf verder.

import { useRouter } from "expo-router";
import { useEffect } from "react";

import { ScreenCanvas } from "@mind/ui/components/ScreenCanvas";

export default function AuthCallback() {
  const router = useRouter();
  useEffect(() => {
    if (router.canGoBack()) router.back();
    else router.replace("/");
  }, [router]);
  return <ScreenCanvas state="default">{null}</ScreenCanvas>;
}
