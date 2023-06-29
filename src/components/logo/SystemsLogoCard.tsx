import { Card } from "antd";
import { FC } from "react";

import { ReactComponent as AndroidLogo } from "@/assets/images/android.svg";
import { ReactComponent as IosLogo } from "@/assets/images/apple.svg";
import { ReactComponent as WindowsLogo } from "@/assets/images/windows.svg";

const SystemsLogoCard: FC = () => {
  return (
    <Card>
      <div className="flex items-center justify-between gap-16 p-5">
        <AndroidLogo width={90} height={90} />
        <IosLogo width={80} height={80} />
        <WindowsLogo width={90} height={80} />
      </div>
    </Card>
  );
};

export default SystemsLogoCard;
