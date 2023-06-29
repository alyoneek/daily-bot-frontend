import { Card } from "antd";
import { FC } from "react";

import { ReactComponent as GithubLogo } from "@/assets/images/github.svg";
import { ReactComponent as GitlabLogo } from "@/assets/images/gitlab.svg";

const RepositoriesLogoCard: FC = () => {
  return (
    <Card>
      <div className="flex flex-col items-center gap-16 p-3">
        <GitlabLogo width={80} height={80} />
        <GithubLogo width={80} height={80} />
      </div>
    </Card>
  );
};

export default RepositoriesLogoCard;
